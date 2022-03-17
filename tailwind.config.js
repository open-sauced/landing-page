module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Open Sans", "Segoe UI", "Tahoma", "sans-serif"],
      body: ["Open Sans", "Segoe UI", "Tahoma", "sans-serif"],
      sans: ["Open Sans", "Segoe UI", "Tahoma", "sans-serif"],
    },
    extend: {
      colors: {
        gray100: "#f6f5f0",
        gray400: "#333333",
      },
      fontFamily: {
        primary: "'Open Sans', 'Segoe UI', Tahoma, sans-serif",
      },
    },
  },
  plugins: [],
};
