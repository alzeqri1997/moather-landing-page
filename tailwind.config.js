module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      custom: "1440px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "36px",
        sm: "60px",
        lg: "80px",
        custom: "100px",
        xl: "120px",
        "2xl": "140px",
      },
    },
    extend: {
      dropShadow: {
        "shadow-text": "0 10px 50px rgba(0,0,0, 0.04)",
        "shadow-bg": "0 3px 50px rgba(0,0,0,0.04)",
      },
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
