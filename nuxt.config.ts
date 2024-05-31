// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-primevue'
  ],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: "https://fonts.googleapis.com" },
        { rel: 'preconnect', href: "https://fonts.gstatic.com", crossorigin: true },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" }
      ]
    },
  },
  devtools: { enabled: true },
  css: [
    "~/assets/css/base.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  primevue: {
    options: {
      unstyled: true,
      ptOptions: {
        mergeProps: true
      }
    }
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: 'http://develop.commerce-engine.fasterpay.bamboo.stuffio.com/api/v1/marketplace',
      paymentBase: 'https://develop.pay2.fasterpay.bamboo.stuffio.com/',
    }
  },
  routeRules: {
    '/cart': { ssr: false },
    '/checkout': { ssr: false },
    '/checkout-success': { ssr: false }
  }
})