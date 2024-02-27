import type { MDXComponents } from "mdx/types"
import CodeHeader from "./app/_components/CodeHeader"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 {...props} className="mb-4 text-4xl font-bold" />,
    p: (props) => <p {...props} className="mb-4" />,
    pre: (props) => <pre {...props} className="rounded-b-xl" />,
    CodeHeader,
    ...components,
  }
}
