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
        "band-green": "#166C21",
      },
    },
  },
}
export default config
