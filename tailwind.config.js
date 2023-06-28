const { colors: defColors } = require(`tailwindcss/defaultTheme`);
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2.5rem",
      },
      colors: {
        primary: {
          50: "#F4F1FF",
          100: "#ECE6FF",
          "100-d": "#F1E8FB",
          200: "#DBD0FF",
          "200-d": "#E3D7F2",
          300: "#C1AAFF",
          "300-d": "#C8B9F0",
          400: "#A37AFF",
          "400-d": "#AE98E1",
          500: "#8845FF",
          "500-d": "#9471D3",
          600: "#7C1FFF",
          "600-d": "#844FCF",
          700: "#6E0DF4",
          "700-d": "#7746BB",
          800: "#5C0ACD",
          "800-d": "#643A9D",
          900: "#4E0BA9",
          "900-d": "#52268E",
          925: "#400A88",
          "925-d": "#3F1287",
          950: "#2E0372",
          "950-d": "#321362",
        },
        "light-grey-blue": "#E7EFF7",
        "dark-grey": "#0D080D",
        "surface-1": "#C3A7FF",
        orange: colors.orange,
        "butterfly-bush": {
          50: "#F3F4FB",
          100: "#E4E4F5",
          200: "#D0D0ED",
          300: "#B0B2E0",
          400: "#8A8BD0",
          500: "#736EC3",
          600: "#665BB5",
          700: "#6051A8",
          800: "#524588",
          900: "#443B6D",
          925: "#382E5C",
          950: "#2E2843",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
      backgroundImage: {
        "gradient-black-to-b":
          "linear-gradient(black, rgba(0,0,0,.7), transparent)",
      },
      gridTemplateColumns: {
        services: "repeat(2, 2fr) 1fr repeat(2, 2fr)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1500px",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
