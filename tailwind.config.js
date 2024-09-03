/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#6482AD',
        'lightblue': '#7FA1C3',
        'beige': '#E2DAD6',
        'lightbeige': '#F5EDED',
      },
    },
  },
  plugins: [],
};
