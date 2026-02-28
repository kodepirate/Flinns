/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'flinns-orange': '#f48c25',
        'flinns-blue': '#0a192f',
        'flinns-light-blue': '#112240',
        'flinns-accent': '#64ffda',
        'flinns-purple': '#8a2be2',
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(180deg, #87CEEB 0%, #1E90FF 15%, #000080 50%, #000033 100%)',
      }
    },
  },
  plugins: [],
}
