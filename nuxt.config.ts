import path from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', "@nuxt/image"],
  buildDir: 'build',
  build: {
     transpile: ['vue-toastification']
     }
});