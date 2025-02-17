module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "0px 11.6px 23.2px rgba(8, 35, 34, 0.5585), inset 0px -5.95467px 5.95467px #176561, inset 0px 5.95467px 5.95467px #36ECE3",
        "custom-shadows": "0px 11.6px 23.2px rgba(0, 0, 0, 0.5585), inset 0px -5.95467px 5.95467px #454545, inset 0px 5.95467px 5.95467px #454545",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
