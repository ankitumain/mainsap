import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: "#EF4123",
        yellow: "#FFA305",
        "dark-blue": "#002643",
      },
      fontFamily: {
        "khteka-medium": ["KHTeka Medium", "sans-serif"],
        "khinterference-light": ["KHInterference Light", "sans-serif"],
      },
      letterSpacing: {
        "neg-6p": "-0.06em",
        "neg-5p": "-0.05em",
        "neg-4p": "-0.04em",
        "neg-3p": "-0.03em",
        "neg-2p": "-0.02em",
        "neg-1p": "-0.01em",
      },
    },
  },
  plugins: [],
} satisfies Config;
