/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts}",],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        inconsolata: ['Inconsolata', 'monospace']
      }
    },
  },
  plugins: [],
}
