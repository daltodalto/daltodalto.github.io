import type { Config } from "tailwindcss";

const config: Config = {
  // purge: ["./src/app/**/*.css"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "article-popular3-width": "calc(33.333% - 60px)",
        "article-popular2-width": "calc(50% - 40px)",
      },
      screens: {
        sm: "600px",
        md: "780px",
        lg: "1000px",
        xl: "1200px",
      },
      color: {
        "gray-100": "#FAFBFC",
        "gray-200": "#F5F7FA",
        "gray-300": "#E2E5E9",
        "gray-400": "#A8ADB4",
        "gray-500": "#8B9199",
        "gray-600": "#6E767E",
        "gray-700": "#515A63",
        "gray-800": "#343B42",
        "gray-900": "#171E24",

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
