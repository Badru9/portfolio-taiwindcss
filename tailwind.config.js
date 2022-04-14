module.exports = {
  content: ["./src/index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#06b6d4",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
