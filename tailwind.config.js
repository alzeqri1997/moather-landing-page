module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "36px",
        sm: "100px",
        lg: "140px",
        xl: "140px",
        "2xl": "140px",
      },
    },
    extend: {
      fontFamily: {
        "shamel-bold": ["shamel-bold", "sans-serif"],
        "shamel-book": ["shamel-book", "sans-serif"],
        "shamel-light": ["shamel-light", "sans-serif"],
        "shamel-medium": ["shamel-medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
