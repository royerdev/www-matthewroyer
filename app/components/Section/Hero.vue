<template>
  <BaseSection centered class="flex bg-blue-950 text-white min-h-72 sm:min-h-96 flex-col gap-1 self-end justify-end overflow-hidden relative p-8 sm:py-16">
    <div class="space-y-2 text-base leading-7 min-h mb-6 z-10" :style="`opacity: ${opacity}`">
      <h1 class="mb-2 sm:mb-4 text-3xl sm:text-5xl md:text-6xl tracking-tight">
        Software &amp; Production
      </h1>
      <p class="text-1xl sm:text-2xl tracking-wider md:tracking-widest text-gray-400">
        Georgia, USA
      </p>
    </div>
    <HeroBackground />
  </BaseSection>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
const opacity = ref(1)

onMounted(() => {
  opacity.value = 1 - (y.value / 120)
})

watch(y, () => {
  opacity.value = Math.max(0, Math.min(1, 1 - (y.value / 120)))
})
</script>
