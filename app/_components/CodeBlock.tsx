import hljs from "highlight.js/lib/core"
import typescript from "highlight.js/lib/languages/typescript"

hljs.registerLanguage("typescript", typescript)

// this should only be used to display static content (hence the "dangerously")
export default function CodeBlock(props: { code: string }) {
  return (
    <pre>
      <code
        className="language-typescript hljs"
        dangerouslySetInnerHTML={{
          __html: hljs.highlight(props.code, { language: "typescript" }).value,
        }}
      />
    </pre>
  )
}
