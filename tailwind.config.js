/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#434343",
        secondary: "#2E2E2E",
        special: "#F97316",
      },
      backgroundColor: {
        background: "#f0f1f1",
      },
    },
  },
  plugins: [],
};
