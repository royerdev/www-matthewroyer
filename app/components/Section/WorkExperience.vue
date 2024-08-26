<template>
  <BaseSection>
    <div class="text-left space-y-4 text-base leading-7 max-w-lg m-auto flex gap-4 flex-col">
      <div v-for="(position, i) in shownExperience" :key="i" class="relative">
        <WorkTitle
          :title="position.company"
          :subtitle="getReadableTime(position.titles)"
        />
        <WorkPositions :experience="position" />
      </div>
      <ShowMore
        v-if="shownExperience.length < experience.length"
        :count="experience.length - shownExperience.length"
        class="ml-6 !-mt-0"
        @toggle="showAll"
      />
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
const experience: Ref<Experience[]> = ref([])

const { data } = await useFetch('/api/experience', {
  transform: data => data.experience || [],
})

experience.value = data.value || []

const getDate = (date: string) => {
  return (['Today', 'Now'].includes(date)) ? new Date() : new Date(date)
}

const getMonthDifference = (d1: Date, d2: Date) => {
  let months = (d2.getFullYear() - d1.getFullYear()) * 12
  months -= d1.getMonth() + 1
  months += d2.getMonth() + 1
  return months <= 0 ? 0 : months
}

const getReadableTime = (titles: Array<{ start: string, end: string }>) => {
  let total = 0
  titles.forEach(function (title) {
    const start = getDate(title.start)
    const end = getDate(title.end)
    total += getMonthDifference(start, end)
  })

  const difYear = Math.floor(total / 12)
  const difMonth = (total % 12)

  const txtYear = (difYear > 1) ? difYear + ' years' : difYear + ' year'
  const txtMonth = (difMonth > 1) ? difMonth + ' months' : difMonth + ' month'

  return (difMonth > 0) ? txtYear + ' ' + txtMonth : txtYear
}

const show = ref(3)
const shownExperience = computed(() => experience.value.slice(0, show.value) || [])

const showAll = () => {
  show.value = experience.value.length || 0
}
</script>
