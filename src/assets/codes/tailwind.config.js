/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        // Behind Button
        bgLinearBtn:
          "linear-gradient(265.86deg, rgba(79, 155, 252, 0.5) -4.66%, rgba(223, 47, 242, 0.5) 113.04%)",
      },
      animation: {
        ping2: "ping2 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        bounce2: "bounce2 3s infinite",
      },
      keyframes: {
        ping2: {
          "75%, 100%": {
            transform: "scale(1.4)",
            opacity: "0",
          },
        },
        bounce2: {
          "0%, 100%": {
            transform: "translateY(-2%)",
            "ease-in": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: " translateY(0)",
            "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
