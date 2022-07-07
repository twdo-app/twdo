module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        primary: "var(--primary)",
        subtle: "var(--subtle)",
        "primary-border": "var(--primary-border)",
        "primary-subtle": "var(--primary-subtle)",
        fg: "var(--fg)",
        fgb: "var(--fgb)",
        card: "var(--card)",
        "card-odd": "var(--card-odd)",
        "card-border": "var(--card-border)",
        "input-bg": "var(--input-bg)",
        "input-border": "var(--input-border)",
        link: "var(--link)",
      },
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
        clickable:
          "background-color padding border outline transform height position",
      },
    },
  },
  plugins: [],
};
