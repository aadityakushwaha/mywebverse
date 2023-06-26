/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f5f5f5",
        "primary-blue": "#1d9bf0",
        "white-default-bg": "#fff",
        "twitter-primary-black": "#0f1419",
        "dark-dim-bg": "#15202b",
        "cultured-grey": "#f7f9f9",
      },
      fontFamily: {
        bold: "'Work Sans'",
      },
      borderRadius: {
        "13xl": "32px",
        "81xl": "100px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
