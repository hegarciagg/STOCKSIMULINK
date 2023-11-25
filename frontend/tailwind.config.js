/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#F16522",
        colorSecondary: "#202123",
        colorBackground: "#ececf1",
        colorTransparent: "rgba(255, 255, 255, .4)",
        colorIcon: "#a9a9a9",
        colorTitles: "#222222",
        colorSubtitle: "#808080",
        colorText: "#696969",
        colorBorder_reviews: "#19c37d",
        colorCompany: "#a5a6a7",
      },
    },
  },
  plugins: [],
};
