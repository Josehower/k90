import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],

  plugins: [],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "theme-primary": "#1E293B",
        "theme-secondary": "#3B82F6", 
        "theme-dark": "#0F172A",
        "theme-bg": "#020617",
      },
    },
  },
}
export default config
