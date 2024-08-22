<template>
  <div class="ml-16 before:content-[''] before:block before:absolute before:top-0 before:left-[31px] before:h-full before:border before:border-gray-300 before:rounded-[23px] before:box-content">
    <template v-for="(title, i) in experience.titles" :key="i">
      <WorkDescription
        v-if="i === 0 || expanded"
        v-bind="title"
      />
    </template>
    <ShowMore
      v-if="experience.titles.length > 1"
      :count="experience.titles.length - 1"
      @toggle="toggleTitles"
    />
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
