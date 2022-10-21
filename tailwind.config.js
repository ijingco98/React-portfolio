/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1':"url('../assets/backdrop/1.png')",
      }
    },
    fontFamily: {
      signature: ["Lobster Two"],
      details: ["Abril Fatface"],
    },
  },
  plugins: [],
}