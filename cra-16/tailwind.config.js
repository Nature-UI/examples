module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        "orange-500": "#dd6b20"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    "./src/**/*.js*",
    "./node_modules/@nature-ui/**/*.js*",
  ],
}
