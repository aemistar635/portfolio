/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue'
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
