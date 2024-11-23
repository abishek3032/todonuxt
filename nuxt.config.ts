// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  app:{
    pageTransition:{name:'page',mode:'out-in'},
    head:{
      title:'Todo App',
      meta:[
        {charset:'utf-8'},
        {
          name:'viewport',
          content:'width=device-width, initial-scale=1',
        },
        {
          hid:'description',
          name:'description',
          content:'My First Nuxt Todo App'
        }
      ]
    },
  },
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})
