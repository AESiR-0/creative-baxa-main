import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#80d3ff",
        secondary: "#0e0d0d",
        tertiary: "#d7d7d7",
      },
      fontFamily: {
        codec: ["var(--font-codec-pro)", "sans-serif"], // Use the CSS variable
      },
    },
  },
  plugins: [],
} satisfies Config;
