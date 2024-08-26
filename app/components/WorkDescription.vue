<template>
  <div class="mb-2 mt-4">
    <div class="flex items-center mb-1 gap-2 flex-wrap">
      <h4 class="font-medium relative before:content-[''] before:block before:box-content before:absolute before:-left-[44px] before:top-1/2 before:-translate-y-1/2 before:h-[7px] before:w-[7px] before:bg-primary before:rounded-full before:border-[9px] before:border-white dark:before:border-gray-800">
        {{ title }}
      </h4>
      <span v-if="timeframe" class="text-xs text-gray-600 dark:text-gray-400">
        {{ timeframe }}
      </span>
    </div>
    <p v-if="description" class="text-sm text-gray-600 dark:text-gray-400">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  start: { type: String, default: null },
  end: { type: String, default: null },
  description: { type: String, default: null },
})

const timeframe = computed(() => {
  if (props.start && props.end) {
    return `${formatDate(props.start)} - ${formatDate(props.end)}`
  }
  return null
})
</script>
