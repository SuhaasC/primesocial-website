/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff", // lightest
          100: "#e0f2fe", // lighter
          200: "#bae6fd", // lighter
          300: "#7dd3fc", // lighter
          400: "#c1d6ff", // lighter
          500: "#3b82f6", // base
          600: "#2563eb", // lighter
          700: "#1c2d6b", // custom navyish
          800: "#1e3a8a", // darker
          900: "#1e40af", // darker
          950: "#1e1b4b", // darkest
        },
        secondary: {
          50: "#f8fafc", // lightest
          100: "#f1f5f9", // lighter
          200: "#e2e8f0", // lighter
          300: "#cbd5e1", // lighter
          400: "#94a3b8", // lighter
          500: "#64748b", // base
          600: "#475569", // lighter
          700: "#2c2e3a", // base
          800: "#1e293b", // darker
          900: "#0f172a", // darkest
        },
        accent: {
          50: "#fefce8", // lightest
          100: "#fFFCD9", // lightest
          200: "#fef08a", // lighter
          300: "#fde047", // lighter
          400: "#fDe047", // base
          500: "#D4AF37", // darker
          600: "#ca8a04", // darker
          700: "#a16207", // darker
          800: "#854d0e", // darker
          900: "#713f12", // darkest
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
