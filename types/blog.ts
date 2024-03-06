import { ReactElement } from "react"

export type Post = {
  default: () => ReactElement
  frontmatter: { title: string; date: string; author: string }
  url: string
}
