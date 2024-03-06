import { Children, ReactElement, ReactNode } from "react"

export function getExerptContent(JSX: ReactElement): ReactNode {
  return (
    Children.toArray(JSX.props.children).filter((child: ReactNode) => {
      if (!child) return
      if (
        typeof child === "object" &&
        "type" in child &&
        typeof child.type! !== "string"
      ) {
        return child.type.name === "Exerpt"
      }

      return false
    })[0] || "This post has no exerpt."
  )
}
