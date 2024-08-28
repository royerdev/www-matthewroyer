<template>
  <div
    class="w-full flex items-center justify-center gap-16 sm:mb-8 sm:mt-2"
    ref="lighthouseReport"
  >
    <LighthouseScore
      v-for="(metric, index) in metrics"
      :key="index"
      class="hidden sm:block cursor-default"
      :label="metric.label"
      :score="metric.value"
      @click="sendConfetti()"
    />
    <LighthouseScore
      class="block sm:hidden"
      :score="metrics.reduce((acc, metric) => acc + metric.value, 0) / metrics.length"
      @click="sendConfetti()"
    />
  </div>
</template>

<script setup lang="ts">
import confetti from 'canvas-confetti'

const metrics = ref([
  { label: 'Performance', value: 100 },
  { label: 'Accessibility', value: 100 },
  { label: 'Best Practices', value: 100 },
  { label: 'SEO', value: 100 },
])

const lighthouseReport = ref(null)

onMounted(() => {
  if (import.meta.client && lighthouseReport.value) {
    const observer = new IntersectionObserver(onIntersection)
    observer.observe(lighthouseReport.value)
  }
})

const sendConfetti = ({ x = 0 } = {}) => {
  x = x || Math.random() * 0.8 + 0.1 // Default to random number between 0.1 and 0.9
  confetti({
    shapes: ['circle'],
    scalar: 0.6,
    origin: { x, y: 1 },
  })
}

interface IntersectionObserverEntry {
  isIntersecting: boolean;
}

const onIntersection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      sendConfetti({ x: 0.2 })
      setTimeout(() => sendConfetti({ x: 0.4 }), 100)
      setTimeout(() => sendConfetti({ x : 0.6 }), 300)
      sendConfetti({ x: 0.8 })
    }
  })
}
</script>
