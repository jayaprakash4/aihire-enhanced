/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: { DEFAULT: "#4f46e5", foreground: "#ffffff" },
          surface: { DEFAULT: "#ffffff", on: "#1e293b" },
          surfaceAlt: "#f1f5f9",
          success: { DEFAULT: "#059669", foreground: "#ffffff" },
          warning: { DEFAULT: "#d97706", foreground: "#ffffff" },
          error: { DEFAULT: "#dc2626", foreground: "#ffffff" }
        }
      }
    }
  },
  plugins: []
};
