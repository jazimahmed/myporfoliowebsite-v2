/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'darker': "0 15px 25px rgba(0, 0, 0, 0.6)",  // Custom darker shadow
      },
      fontFamily: {
        "monospace": "Courier Prime",  // Custom font
      }
    },
  },
  plugins: [],
}
