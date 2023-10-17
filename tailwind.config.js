/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue'
  ],
  // content: ["./src/**/*.{html,js}"],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: theme => ({
        'light-custom': "url('static/bg-light.jpg')",
        'dark-custom': "url('static/bgtwo.jpg')"
      })
    }
  },
  plugins: []
}
