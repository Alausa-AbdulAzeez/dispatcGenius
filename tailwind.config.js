/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryWhine: "#450920",
        primaryGreen: "#002628",
        primaryPurple: "#023047",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "light-blue": "rgba(22, 73, 235, 0.68)",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#7ffff4",
        "main-blue": "#1649EB",
        "dark-blue": "#243469",
        textGray: "#797979",
        // primaryPurple: "#45093B",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: (theme) => ({
        "bg-0": "url('./src/assets/bgGreen2.svg')",
        bgCeo: "url('./src/assets/spidgenius2.svg')",
        bgHandshake: "url('./src/assets/handShake.jpg')",
        bgMdCeo: "url('./src/assets/spidgenius4.svg')",
        bgMdSm: "url('./src/assets/McCEOsm.png')",
        bgLg: "url('./src/assets/bgLg.svg')",
        "bg-1": "url('/path/to/your/image-1.jpg')",
        "bg-2": "url('/path/to/your/image-2.jpg')",
        "bg-3": "url('/path/to/your/image-3.jpg')",
      }),
    },
  },
  plugins: [],
};
