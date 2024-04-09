import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        "grey-100": "#FAFBFC",
        "grey-200": "#F5F7FA",
        "grey-300": "#E2E5E9",
        "grey-400": "#A8ADB4",
        "grey-500": "#8B9199",
        "grey-600": "#6E767E",
        "grey-700": "#515A63",
        "grey-800": "#343B42",
        "grey-900": "#171E24",

        "primary-100": "#E1E6EB",
        "primary-200": "#B3C2CD",
        "primary-300": "#849DB0",
        "primary-400": "#5681A0",
        "primary-500": "#296583",
        "primary-600": "#1D4F6F",
        "primary-700": "#123C5A",
        "primary-800": "#0A2A46",
        "primary-900": "#0E2844",

        "yellow-300": "#F9F3D2",
        "yellow-400": "#F5ECB8",
        "yellow-500": "#F2E59D",
        "yellow-600": "#EEDC82",
        yellow: "#F2D024",
        green: "#38A169",
        red: "#E53E3E",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
