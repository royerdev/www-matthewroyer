<template>
  <div
    class="flex flex-1 flex-row gap-1 items-center justify-center my-2 mx-4 text-blue-300 group relative cursor-default"
    :class="badgeClasses"
  >
    <p
      class="text-nowrap"
      :class="size"
    >
      {{ name }}
    </p>
    <LinkedInBadge v-if="badge" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  progress: {
    type: Number,
    default: 0,
  },
  badge: {
    type: Boolean,
    default: false,
  },
})

const size = computed(() => {
  if (props.progress >= 90) {
    return 'text-4xl font-bold'
  }
  else if (props.progress >= 80) {
    return 'text-3xl font-semibold'
  }
  else if (props.progress >= 70) {
    return 'text-2xl'
  }
  else if (props.progress >= 60) {
    return 'text-xl'
  }
  else if (props.progress >= 50) {
    return 'text-lg'
  }
  else if (props.progress >= 40) {
    return 'text-base'
  }
  else if (props.progress >= 30) {
    return 'text-sm font-light'
  }
  else if (props.progress >= 20) {
    return 'text-xs font-extralight'
  }
  else {
    return 'text-xxs'
  }
})

const badgeClasses = computed(() => {
  return {
    'badge !text-white': props.badge,
  }
})
</script>
