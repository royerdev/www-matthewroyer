<template>
  <div class="absolute z-0 -inset-20 opacity-30 bg-fixed bg-no-repeat bg-[left_-2.5rem] bg-contain" :style="styles" />
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()

const blur = computed(() => {
  const blur = (y.value / 40)
  return Math.max(0, Math.min(5, blur))
})

const img = useImage()

const styles = computed(() => {
  const imgUrl = img('/img/banner.png', { format: 'webp' })
  return {
    backgroundImage: `url('${imgUrl}')`,
    filter: `blur(${blur.value}px)`,
  }
})
</script>
