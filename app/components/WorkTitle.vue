<template>
  <div class="flex gap-2 items-center">
    <div class="z-10 border-8 border-white dark:border-gray-800 box-content w-12 h-12 rounded-full text-white bg-primary flex font-extrabold justify-center items-center">
      {{ (title || "")[0]?.toUpperCase() }}
    </div>
    <div>
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <span v-if="subtitle" class="text-gray-600 dark:text-gray-400">
        {{ subtitle }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: null },
})
</script>
