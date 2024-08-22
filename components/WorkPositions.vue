<template>
  <div class="ml-16 before:content-[''] before:block before:absolute before:top-0 before:left-[31px] before:h-full before:border before:border-gray-300 before:rounded-[23px] before:box-content">
    <template
      v-for="(title, j) in experience.titles"
      :key="j"
    >
      <WorkDescription
        v-if="j === 0 || expanded"
        v-bind="title"
      />
    </template>
    <span
      v-if="experience.titles.length > 1"
      class="text-sm font-medium cursor-pointer flex gap-1 items-center"
      @click="toggleTitles"
    >
      <template v-if="!expanded">
        Show {{ experience.titles.length - 1 }} more
        <BaseChevron direction="down" />
      </template>
      <template v-else>
        Show less
        <BaseChevron direction="up" />
      </template>
    </span>
  </div>
</template>

<script setup lang="ts">
let expanded = ref(false)

const toggleTitles = () => {
  expanded.value = !expanded.value
}

defineProps({
  experience: Object,
})
</script>
