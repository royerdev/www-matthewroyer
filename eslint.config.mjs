// @ts-check
import withNuxt from '.nuxt/eslint.config.mjs'

export default withNuxt().overrideRules({
  'vue/max-attributes-per-line': ['warn', { singleline: 3 }],
  'vue/singleline-html-element-content-newline': ['warn', { ignores: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'NuxtLink'] }],
})
