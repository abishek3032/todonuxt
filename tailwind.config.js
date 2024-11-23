/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './app.vue', // Include app.vue for Nuxt 3
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

