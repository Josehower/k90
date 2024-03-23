import nextMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
}

const withMDX = nextMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
