/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        callout: "rgba(var(--callout-rgb), 0.5)",
      },
      borderColor: {
        calloutBorder: "rgba(var(--callout-border-rgb), 0.3)",
      },
    },
  },
  plugins: [],
};
