/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563EB",
          blueLight: "#60A5FA",
          blueDark: "#1D4ED8",
          electric: "#3B82F6",
        },
        dark: {
          bg: "#080B14",
          card: "#0F1220",
          border: "#1E2340",
          hover: "#141828",
          muted: "#1A1F35",
        },
      },
      fontFamily: {
        display: ["'Cabinet Grotesk'", "'DM Sans'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
