/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        primary: '#1A7290',
        'primary-light': '#EAF7FC',
        orange: '#F7941D',
        'orange-light': '#FFF6EC',
        green: '#A5C330',
        'green-light': '#F1F7D1',
        pink: '#ED7DB1',
        'pink-light': '#FFF9FC',
        turquoise: '#0F857F',
        'turquoise-light': '#E7FFFE'
      }
    }
  },
  plugins: []
}
