/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'vw-20': '20vw'
      },
      fontFamily: {
        'cabinet-grotesk': ['Cabinet grotesk', 'sans-serif'],
        'jet-brains': ['JetBrains Mono', 'monospace']
      },
      height: {
        'mobile-nav': 'calc(100vh - 3.5rem)'
      },
      margin: {
        'vertical-gap': 'var(--vertical-gap)'
      },
    },
  },
  plugins: [],
}

