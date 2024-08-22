<template>
  <BaseSection
    centered
    class="!p-6 text-xs"
  >
    <p class="tracking-wide">
      &copy; {{ new Date().getFullYear() }}
      &bullet; <nuxt-link to="/privacy">Privacy</nuxt-link>
      &bullet; Designed by <nuxt-link to="https://matthewroyer.com">
        Matt Royer
      </nuxt-link>
    </p>
  </BaseSection>
</template>
