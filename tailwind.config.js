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
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        // primaryPurple: "#45093B",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: (theme) => ({
        "bg-0": "url('./src/assets/bgGreen2.svg')",
        "bg-1": "url('/path/to/your/image-1.jpg')",
        "bg-2": "url('/path/to/your/image-2.jpg')",
        "bg-3": "url('/path/to/your/image-3.jpg')",
      }),
    },
  },
  plugins: [],
};
