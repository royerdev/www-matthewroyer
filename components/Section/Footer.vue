<template>
  <BaseSection
    centered
    class="!p-6 text-xs text-gray-400 bg-blue-950"
  >
    <p class="tracking-wide">
      &copy; {{ new Date().getFullYear() }}
      &bullet; <NuxtLink to="/privacy">Privacy</NuxtLink>
      &bullet; Designed by <NuxtLink to="https://matthewroyer.com">
        Matt Royer
      </NuxtLink>
    </p>
  </BaseSection>
</template>

<style scoped>
a {
  @apply text-white opacity-70;
}
</style>
