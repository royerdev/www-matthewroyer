<template>
  <div
    class="w-full flex items-center justify-center gap-16 sm:mb-8 sm:mt-2"
    ref="lighthouseReport"
    @mouseenter="sendConfetti"
  >
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

<script setup lang="ts">
import confetti from 'canvas-confetti'

const metrics = ref([
  { label: 'Performance', value: 100 },
  { label: 'Accessibility', value: 100 },
  { label: 'Best Practices', value: 100 },
  { label: 'SEO', value: 100 },
])

const lighthouseReport = ref(null)
const confettiCount = ref(0)

onMounted(() => {
  if (import.meta.client && lighthouseReport.value) {
    const observer = new IntersectionObserver(onIntersection)
    observer.observe(lighthouseReport.value)
  }
})

const sendConfetti = () => {
  confettiCount.value++
  if (confettiCount.value > 10) return
  const x = Math.random() * 0.4 + 0.3 // Random number between 0.3 and 0.7
  confetti({
    shapes: ['circle'],
    scalar: 0.5,
    origin: { x, y: 0.8 },
  })
}

interface IntersectionObserverEntry {
  isIntersecting: boolean;
}

const onIntersection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Send it twice initially
      sendConfetti()
      sendConfetti()
    }
  })
}
</script>
