import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        church: {
          navy: "#0F172A", // Stately navy display background
          "navy-light": "#1E293B",
          gold: "#D97706", // Antique gold accents
          "gold-hover": "#B45309",
          cream: "#FAF8F5", // Warm cream page background
          surface: "#FFFFFF",
          text: "#1E293B",
          muted: "#64748B",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      minHeight: {
        tap: "44px",
      },
      minWidth: {
        tap: "44px",
      },
    },
  },
  plugins: [],
};
export default config;
