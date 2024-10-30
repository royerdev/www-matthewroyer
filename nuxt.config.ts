// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/ui', '@vueuse/nuxt', '@nuxt/eslint'],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Matt Royer',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Matt Royer is an experienced full-stack software engineer and application designer based in the United States.' },
      ],
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  nitro: {
    compressPublicAssets: {
      brotli: true,
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
