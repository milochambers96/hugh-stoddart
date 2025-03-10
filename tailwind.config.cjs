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
          accent: "#fbbf24",

          card: "#2E2E2E",
          "card-border": "#3D3D3D",

          // Main button colors
          button: "#9C7A41",
          "button-hover": "#7D623A",
          "button-text": "#F5F1E8",

          // Ghost button colors
          "ghost-border": "#B8A17C",
          "ghost-text": "#B8A17C",
          "ghost-hover-bg": "rgba(156, 122, 65, 0.15)",
          "ghost-hover-text": "#CEBA9C",
          "ghost-hover-border": "#CEBA9C",
        },
      },
      fontFamily: {
        title: ["Lora", "serif"],
        body: ["Spectral", "serif"],
        interactive: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
