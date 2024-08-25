<template>
  <div
    class="flex flex-1 flex-row gap-1 items-center justify-center my-2 mx-4 text-blue-300 group relative cursor-default"
    :class="style"
  >
    <p class="text-nowrap" :class="size">
      {{ name }}
    </p>
    <LinkedInBadge v-if="badge" />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  name: Skill['name']
  level: Skill['level']
  badge: Skill['badge']
}>(), {
  level: 0,
  badge: false,
})

const size = computed(() => {
  if (props.level >= 90) {
    return 'text-4xl font-bold'
  }
  else if (props.level >= 80) {
    return 'text-3xl font-semibold'
  }
  else if (props.level >= 70) {
    return 'text-2xl'
  }
  else if (props.level >= 60) {
    return 'text-xl'
  }
  else if (props.level >= 50) {
    return 'text-lg'
  }
  else if (props.level >= 40) {
    return 'text-base'
  }
  else if (props.level >= 30) {
    return 'text-sm font-light'
  }
  else if (props.level >= 20) {
    return 'text-xs font-extralight'
  }
  else {
    return 'text-xxs'
  }
})

const style = computed(() => {
  return {
    'badge !text-white': props.badge,
  }
})
</script>
