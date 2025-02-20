const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hs: {
          background: "#232323",
          // hex-codes for core text
          title: "#EEEEEE",
          subtitle: "#BBBBBB",
          body: "#D9D9D9",

          card: "#2E2E2E",
          "card-border": "#3D3D3D",

          // "card-bk": "BBC4AE",
          // "card-border": "5C6A63",

          accent: "#C79A6A",
          secondary: "#4A6E73",
          link: "#00A8A8",
          "link-hover": "#A0D9D9",
          muted: "#555555",
          "button-accent": "#8A3D3D",
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
