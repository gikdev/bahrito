/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          darker: "#111113",
          dark: "#212225",
          light: "#777B84",
          lighter: "#EDEEF0",
        },
      },
    },
  },
  plugins: [],
}
