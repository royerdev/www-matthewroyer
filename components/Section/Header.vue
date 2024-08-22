<template>
  <div class="bg-blue-950 text-white py-4 px-6 fixed left-0 right-0 z-20 overflow-hidden">
    <HeroBackground />
    <div class="flex gap-2 z-10">
      <NuxtLink to="/" class="text-3xl tracking-wide font-normal relative hover:cursor-pointer text-primary hover:text-white transition-colors duration-700 ease-in-out no-underline">
        <span class="text-white">matt</span>
        <span>royer</span>
      </NuxtLink>
      <div class="flex-grow" />
      <ToolBar />
    </div>
  </div>
  <SectionHero />
</template>
