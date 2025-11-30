/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "text-focus-in": "text-focus-in 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
        "fade-in-bottom": "fade-in-bottom 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "fade-in": "fade-in 0.5s ease-in forwards",
      },
      keyframes: {
        "text-focus-in": {
          "0%": {
            filter: "blur(12px)",
            opacity: "0"
          },
          to: {
            filter: "blur(0)",
            opacity: "1"
          },
        },
        "fade-in-bottom": {
          "0%": {
              transform: "translateY(50px)",
              opacity: "0"
          },
          to: {
              transform: "translateY(0)",
              opacity: "1"
          }
        },
        "fade-in": {
          "0%": {
              opacity: "0"
          },
          to: {
              opacity: "1"
          }
        }
      },
      transitionDuration: {
        "1500": "1500ms",
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-hamburgers'),
  ],
  daisyui: {
    themes: ["corporate"],
  },
}