<template>
  <UIcon :name="`mdi:chevron-${direction}`" class="w-6 h-6" />
</template>

<script setup lang="ts">
defineProps({
  direction: {
    type: String as PropType<'up' | 'down' | 'left' | 'right'>,
    required: true,
  },
})
</script>
