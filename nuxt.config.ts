// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Supatsara's Portfolio",
      meta: [{ name: "description", content: "Check my profile" }],
    },
    pageTransition: { name: "layout", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  typescript: {
    shim: false,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    "@/assets/css/main.css",
    "@/assets/css/transition.css",
    "@/assets/css/variables.css",
    "@/assets/css/typography.css",
    "aos/dist/aos.css",
  ],
});
