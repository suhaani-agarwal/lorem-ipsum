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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        "homebg" : "url('https://media.istockphoto.com/id/1088102900/photo/young-indian-women-group-having-fun-together.jpg?s=612x612&w=0&k=20&c=8pGwwyjWvhHe2Jo1w1hnB2tzPNU786m2TVxGonCMVx8=')"
      }
    },
  },
  plugins: [],
};
