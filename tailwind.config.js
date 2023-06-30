/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'vw-20': '20vw'
      },
      fontFamily: {
        'cabinet-grotesk': ['Cabinet grotesk', 'sans-serif'],
        'jet-brains': ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}

