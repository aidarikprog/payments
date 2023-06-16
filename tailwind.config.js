// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      // ubuntu: ["Ubuntu"],
      // roboto: ["Roboto"],
    },
    container: {
      center: true,
      padding: "10px",
    },
    extend: {
      gridTemplateColumns: {
        "auto-full": "repeat(auto-fill, 346px)",
        "person": "repeat(auto-fill, 255px)",
      },
      // colors:{
      //   red: '#fff'
      // }
      maxWidth: {
        w: '1110px'
      }
    },
  },
  plugins: [],
}
