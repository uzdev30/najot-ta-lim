/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,cjs,mjs,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        boy: "url('/src/assets/images/boy.png')",
        das: "url('/src/assets/images/dasturlash.png')",
        mar: "url('/src/assets/images/marketing.png')",
        diz: "url('/src/assets/images/dizayn.png')",
        per: "url('/src/assets/images/persent.png')",
        gray: "url('/src/assets/images/gray.png')",
        kino: "url('/src/assets/images/kino1.png')",
        phone: "url('/src/assets/images/bgg.png')",
        bg1: "url('/src/assets/images/bg.png')",
        graya: "url ('/src/assets/images/shadoe.png')",
      },
      boxShadow: {
        "3xl": "-90px 15px 10px -10px rgba(255, 255, 255, 0.17)",
        "4xl": "20px 1px 1px 10px ",
      },
      colors: {
        bg: "#F1F0EE  ",
        bg2: "#F9F9F9",
      },
    },
  },
  plugins: [],
};
