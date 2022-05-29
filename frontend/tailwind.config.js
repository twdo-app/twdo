module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "app-layout": "1fr 500px 1fr",
      },
      gridTemplateRows: {
        "app-layout": "220px 1fr",
      },
      maxWidth: {
        sidebar: "200px",
      },
      transitionProperty: {
        clickable: "background padding border outline transform height",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child-icon", "& svg");
    },
  ],
};
