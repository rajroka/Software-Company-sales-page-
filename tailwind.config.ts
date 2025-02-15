import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class',
  theme: {
    extend: {
      primary: '#1834E7',
      

      fontFamily: {
          inter : ["Inter"],
      }
    },
  },
  plugins: [],
};

export default config;
