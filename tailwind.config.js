/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: {
          100: "#FFFFFF",
          200: "#F4F5F9",
          300: "#F5F5F5"
        },
        text: {
          100: "#868889",
          200: "#000000",
        },
        link: "#407EC7",
        border: "#EBEBEB",
        primary: {
          100: "#EBFFD7",
          200: "#AEDC81",
          300: "#6CC51D",
        }
      },
      fontFamily: 'Poppins'
    },
  },
  plugins: [],
}