import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#3374db",
        "gray-light": "#5B5B5B",
      },
      screens: {
        "2lg": "1200px",
        "1.5xl": "1400px",
      },
    },
    container: { center: true },
  },
};
