/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "vw-20": "20vw",
      },
      fontFamily: {
        "cabinet-grotesk": ["Cabinet grotesk", "sans-serif"],
        "jet-brains": ["JetBrains Mono", "monospace"],
      },
      textColor: {
        javascript: "#F7DF1E",
        typescript: "#007ACC",
        styledcomponents: "#DB7093",
        vite: "#39B982",
        redux: "#764ABC",
        firebase: "#FFA000",
        tailwind: "#06B6D4",
        react: "#61DAFB",
        reacttestinglibrary: "#FFD700",
        vitest: "#39B982",
        sass: "#c69",
        jest: "#C63D14",
        datepurple: "#BA7AFE",
        analytics: "#E37400",
        height: {
          "mobile-nav": "calc(100vh - 3.5rem)",
        },
        margin: {
          "vertical-gap": "var(--vertical-gap)",
        },
      },
    },
    plugins: [],
  },
};
