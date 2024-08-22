<template>
  <UTooltip
    class="dark"
    text="Toggle theme"
    :shortcuts="[colorMode.preference]"
  >
    <BaseButton
      :icon="icon"
      class="rounded-full hover:bg-transparent"
      variant="ghost"
      aria-label="Theme"
      @click="next()"
    />
  </UTooltip>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const icon = computed(() => {
  switch (colorMode.preference) {
    case 'light':
      return 'mdi:white-balance-sunny'
    case 'dark':
      return 'mdi:weather-night'
    default:
      return 'mdi:theme-light-dark'
  }
})

const next = () => {
  switch (colorMode.preference) {
    case 'light':
      colorMode.preference = 'dark'
      break
    case 'dark':
      colorMode.preference = 'system'
      break
    default:
      colorMode.preference = 'light'
      break
  }
}
</script>
