// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools:          { enabled: true },
  css:               [ "~/assets/tailwind.css" ],
  srcDir:            "src/",
  eslint:            {
    checker: true,
  },
  ssr:     false,
  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@pinia/nuxt",
  ],
  routeRules: {
    "/": { redirect: "/dashboard " },
  },
});