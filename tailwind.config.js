/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F7F1E8",
          50: "#FAF7F1",
          100: "#F7F1E8",
          200: "#EFE7DC",
          300: "#E5DCD0",
          blush: "#F6E8E5",
        },
        ink: {
          DEFAULT: "#111111",
          muted: "#5F5A54",
          faint: "#8A847C",
        },
        warmborder: {
          DEFAULT: "#D8D0C6",
          dark: "#111111",
          subtle: "#E6DFD6",
        },
        burgundy: {
          DEFAULT: "#6F263D",
          hover: "#581D30",
          faint: "#F7EDF0",
          border: "#D4B8C1",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],

        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],

        mono: [
          '"IBM Plex Mono"',
          '"JetBrains Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      maxWidth: {
        editorial: "1280px",
      },
    },
  },
  plugins: [],
};
