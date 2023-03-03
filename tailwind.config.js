/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xxs: ".6rem",
      sm: "0.875rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": ["4.25rem", "1.1"],
    },
    extend: {
      notice: "hsl(235deg 100% 50%)",
      noticebg: "hsl(235deg 0% 100%)",
      warning: "hsl(35deg 100% 46%)",
      warningbg: "hsl(40deg 100% 94%)",
      success: "hsl(120deg 80% 35%)",
      successbg: "hsl(120deg 90% 96%)",
      error: "hsl(345deg 100% 50%)",
      errorbg: "hsl(350deg 90% 96%)",
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },
};
