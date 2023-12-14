/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ef4444",

          secondary: "#f87171",

          accent: "#813500",

          neutral: "#140503",

          "base-100": "#fffdff",

          info: "#00a1fc",

          success: "#7ee55a",

          warning: "#ff9b00",

          error: "#ff819a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
