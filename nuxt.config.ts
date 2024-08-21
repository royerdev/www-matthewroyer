// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@nuxt/ui', '@nuxt/image', '@vueuse/nuxt', '@nuxt/eslint'],
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
    }
  },
  nitro: {
    compressPublicAssets: {
      brotli: true
    }
  },
  devtools: { enabled: true },
  eslint: {
    config: {
      stylistic: true
    }
  },
})