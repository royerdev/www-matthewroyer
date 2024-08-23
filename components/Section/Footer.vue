<template>
  <BaseSection centered class="dark !p-6 text-xs text-gray-400 bg-blue-950">
    <div class="tracking-wide flex gap-1 flex-wrap justify-center">
      <p>&copy; {{ new Date().getFullYear() }}</p>
      <p>&bullet;</p>
      <NuxtLink to="/privacy">Privacy</NuxtLink>
      <p>&bullet;</p>
      <span class="block sm:hidden"></span>
      <p>Designed by <NuxtLink to="https://matthewroyer.com">Matt Royer</NuxtLink></p>
    </div>
  </BaseSection>
</template>

