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
        complement: "#9D4EDD"
      },
      width: {
        tabela: "80%",
      }
    },
  },
  plugins: [
    
  ],
}