<template>
  <div class="absolute z-0 -inset-20 opacity-30 bg-fixed bg-no-repeat bg-[left_-2.5rem] bg-[url('/img/banner.webp')] bg-cover" :style="`filter:blur(${blur}px)`" />
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
const blur = ref(0)

const calculateBlur = () => {
  if (!y.value) return 0
  const blur = (y.value / 40);
  return Math.max(0, Math.min(5, blur)) // Min 0, Max 5
}

onMounted(() => {
  blur.value = calculateBlur()
})

watch(y, () => {
  blur.value = calculateBlur()
})
</script>
