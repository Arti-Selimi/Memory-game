import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-diagonal":
          "linear-gradient(135deg, var(--tw-gradient-stops))",
      },
      colors: {
        theme: {
          start: "#390862",
          end: "#080A21",
          notclicked: "#1D1B4C",
          clicked: "#2F287F",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
