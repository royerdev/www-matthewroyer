<template>
  <div class="p-8 sm:p-16 mx-auto">
    <div
      class="flex flex-wrap mx-auto max-w-4xl"
      :class="centeredClass"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  centered: Boolean,
})

const centeredClass = computed(() => {
  return {
    'text-center justify-center': props.centered,
  }
})
</script>
