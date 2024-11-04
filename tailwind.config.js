/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Tous les fichiers dans le dossier `pages`
    './components/**/*.{js,ts,jsx,tsx}', // Tous les fichiers dans le dossier `components`
    './app/**/*.{js,ts,jsx,tsx}', // Tous les fichiers dans le dossier `app`
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

