/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: "#E8D6D0",
          200: "#C89F94",
          400: "#A25F4B",
          600: "#744838"
        }
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"]
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" }
        }
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        slideDown: "slideDown .4s ease-in-out"
      },
      backgroundImage: {
        "slider-bg": 'url("./img/slider_background.jpg")'
      }
    }
  },
  plugins: []
};
