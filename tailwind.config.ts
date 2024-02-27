import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./mdx-components.tsx"],
  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
  plugins: [require("tailwind-highlightjs")],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {
      hljs: {
        theme: "stackoverflow-light",
      },
      colors: {
        "bright-cyan": "#00CCFF",
        "neon-red": "#FF0040",
      },
    },
  },
}
export default config
