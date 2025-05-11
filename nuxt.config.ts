export default defineNuxtConfig({
  compatibilityDate: '2025-05-11',

  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/test-utils',
    '@nuxt/fonts',
    'vuetify-nuxt-module'
  ],

  icon: {
    customCollections: [
      {
        prefix: 'app',
        dir: './assets/icons'
      },
    ]
  }
})
