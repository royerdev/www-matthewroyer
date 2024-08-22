<template>
  <BaseSection>
    <div class="flex gap-8 flex-col sm:flex-row items-center sm:items-start">
      <NuxtImg
        src="/img/profile.png"
        format="webp"
        alt="Picture of Matt Royer"
        sizes="sm:200px md:320px"
        :width="320"
        :height="398"
        class="w-full max-w-72 sm:rounded-lg border-4 border-white dark:border-gray-800 shadow-lg sm:w-1/3 overflow-hidden"
      />
      <div class="text-left space-y-4 text-base leading-7 sm:w-2/3">
        <h2 class="text-2xl font-medium">
          Software Engineer
        </h2>
        <p>
          I'm a tech enthusiast with a Bachelor of Science in Information Technology from <NuxtLink
            to="https://www.georgiasouthern.edu/cec/it/bsit"
            target="_blank"
          >
            Georgia Southern University
          </NuxtLink>, where I specialized in web, multimedia, and music technology. As a seasoned full-stack software engineer based in Georgia (US), I thrive on solving complex problems and creating innovative solutions. When I am not working on software, I love watching soccer, attending concerts, and tackling home projects. <NuxtLink
            to="https://www.atlutd.com"
            target="_blank"
          >
            @ATLUTD
          </NuxtLink> <NuxtLink
            to="https://localnatives.com"
            target="_blank"
          >
            @localnatives
          </NuxtLink> <NuxtLink
            to="https://www.nbthieves.com"
            target="_blank"
          >
            @NBThieves
          </NuxtLink>
        </p>
        <p>I designed and developed this website in <a href="https://vuejs.org">Vue 3</a> powered by the <a href="https://nuxt.com">Nuxt 3</a> framework. The sourcecode can be found on my GitHub. If you have any questions or simply want to say hello, feel to reach out on LinkedIn.</p>
        <div class="flex flex-row gap-2" />
      </div>
    </div>
  </BaseSection>
</template>
