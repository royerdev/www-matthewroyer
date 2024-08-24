<template>
  <div class="w-full flex items-center justify-center gap-16 sm:mb-8 sm:mt-2">
    <LighthouseScore
      v-for="(metric, index) in metrics"
      :key="index"
      class="hidden sm:block"
      :label="metric.label"
      :score="metric.value"
    />
    <LighthouseScore
      class="block sm:hidden"
      :score="metrics.reduce((acc, metric) => acc + metric.value, 0) / metrics.length"
    />
  </div>
</template>

<script setup>
const metrics = ref([
  { label: 'Performance', value: 100 },
  { label: 'Accessibility', value: 100 },
  { label: 'Best Practices', value: 100 },
  { label: 'SEO', value: 100 },
])
</script>
