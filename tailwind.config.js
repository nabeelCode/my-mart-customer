module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f4f85",
        // 'primary-text': "white",
        // secondary: "black",
        // 'secondary-text': "white"
      },
      boxShadow: {
        'normal': '0 0 16px 0 rgb(0,0,0,0.1)'
      }
    }
  },
  plugins: [],
}
