<template>
  <BaseSection>
    <div class="flex gap-8 flex-col sm:flex-row items-center sm:items-start">
      <img
        src="/img/profile.webp"
        class="w-full max-w-72 rounded-xl border-4 border-gray-200 dark:border-gray-700 shadow-lg sm:w-1/3 overflow-hidden"
        alt="Picture of Matt Royer"
        :width="320"
        :height="398"
      >
      <div class="text-left space-y-4 text-base leading-7 sm:w-2/3">
        <h2 class="text-2xl font-medium">
          Software Engineer
        </h2>
        <p>
          I'm a tech enthusiast with a Bachelor of Science in Information Technology from
          <NuxtLink to="https://www.georgiasouthern.edu/cec/it/bsit" target="_blank">Georgia Southern University</NuxtLink>,
          where I specialized in web, multimedia, and music technology. As a seasoned full-stack software engineer based in Georgia (US), I thrive on solving complex problems and creating innovative solutions. When I am not working on software, I love watching soccer, attending concerts, and tackling home projects.
          <NuxtLink to="https://www.atlutd.com" target="_blank">@ATLUTD</NuxtLink>&nbsp;
          <NuxtLink to="https://localnatives.com" target="_blank">@localnatives</NuxtLink>&nbsp;
          <NuxtLink to="https://www.nbthieves.com" target="_blank">@NBThieves</NuxtLink>
        </p>
        <p>
          I designed and developed this website in
          <NuxtLink to="https://vuejs.org" target="_blank">Vue 3</NuxtLink>
          powered by the
          <NuxtLink to="https://nuxt.com" target="_blank">Nuxt 3</NuxtLink>
          framework. The
          <NuxtLink to="https://github.com/royerdev/www-matthewroyer" target="_blank">source code</NuxtLink>
          can be found on my GitHub. If you have any questions or simply want to say hello, feel to reach out on LinkedIn.
        </p>
      </div>
    </div>
  </BaseSection>
</template>
