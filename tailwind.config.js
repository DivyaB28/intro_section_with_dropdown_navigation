/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-lg": { max: "1023px" },
        "max-md": { max: "767px" },
        "max-sm": { max: "639px" },
      },
      fontSize: {
        normal: "1.125rem",
      },
      colors: {
        "almost-white": "hsl(0, 0%, 98%)",
        "medium-grey": "hsl(0, 0%, 41%)",
        "almost-black": "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
