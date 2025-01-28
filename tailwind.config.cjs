const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hs: {
          background: "#1C2421",
          text: "#E5EDE9",
          secondary: "#8FA098",
          accent: "#2D4B3E",
          "accent-text": "#F2F7F5",
          "accent-border": "#334D42",

          link: "#7FBA9A",
          "link-select": "#94CF96",

          muted: "#2A3530",
          "secondary-hover": "#A0B0A8",
          "accent-hover": "#375B4B",
        },
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
        redhat: ["Red Hat Display", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
