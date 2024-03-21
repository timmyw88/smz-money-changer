/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#FFF1D6",
        secondary: "#0000FF",
        dark: "#333",
      },
      borderColor: {
        primary: "#FFF1D6",
        secondary: "#0000FF",
        dark: "#333",
      },
      textColor: {
        primary: "#FFF1D6",
        secondary: "#0000FF",
        dark: "#333",
      },
    },
  },
  plugins: [],
};
