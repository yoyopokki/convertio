import colors from "vuetify/util/colors";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-11",

  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/test-utils",
    "@nuxt/fonts",
    "vuetify-nuxt-module",
  ],

  icon: {
    customCollections: [
      {
        prefix: "app",
        dir: "./assets/icons",
      },
    ],
  },

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: "light",
        themes: {
          light: {
            dark: false,
            colors: {
              background: colors.grey.lighten5,
              primary: "#1976D2",
              secondary: "#424242",
              accent: "#82B1FF",
              error: "#FF5252",
              info: "#2196F3",
              success: "#4CAF50",
              warning: "#FFC107",
              hover: colors.grey.lighten4,
            },
          },
          dark: {
            colors: {
              primary: "#1E1E1E",
              secondary: "#424242",
              accent: "#82B1FF",
              error: "#FF5252",
              info: "#2196F3",
              success: "#4CAF50",
              warning: "#FFC107",
            },
          },
        },
      },
    },
  },
});
