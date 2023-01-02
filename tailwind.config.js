/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1F6306',
        'yellow': '#BA9917',
        'darkBg': '#0A1905',
        'dark': '#071103',
        "cardBg": "#0E2207",
        "fontclr": "#ffffff",
        "paraclr": "#7B8B74",
      },
    },
  },
  plugins: [],
}
