import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "primary1": "#100e09",
        "primary2": "#2a2416",
        "primary3": "#52462e",
        "primary4": "#726240",
        "primary5": "#937e52",
        "primary6": "#ad976c",
        "primary7": "#bfae8d",
        "primary8": "#d1c5ad",
        "primary9": "#e4dcce",
        "primary10": "#f6f3ef",
      }
    },
  },
  plugins: [],
};
export default config;
