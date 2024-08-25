<template>
  <div class="p-8 sm:p-16 mx-auto relative">
    <div class="flex flex-wrap mx-auto max-w-4xl" :class="style">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  centered: Boolean,
})

const style = computed(() => {
  return {
    'text-center justify-center': props.centered,
  }
})
</script>
