/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#181820",
        secondary: "#21212B",
        button: "#5A189A",
        complement: "#9D4EDD",
        sidebarActive: "#E0AAFF"
      },
      width: {
        tabela: "80%",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}