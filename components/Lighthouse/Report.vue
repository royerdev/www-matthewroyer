<template>
    <div class="w-full flex items-center justify-center sm:mb-8 gap-8">
      <LighthouseScore
        class="hidden sm:block"
        v-for="(metric, index) in metrics"
        :key="index"
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
]);
</script>
  