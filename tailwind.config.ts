import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {
      colors: {
        "bright-cyan": "#00CCFF",
        "neon-red": "#FF0040",
      },
    },
  },
  plugins: [],
}
export default config
