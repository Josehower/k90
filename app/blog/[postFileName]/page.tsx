import { Post } from "@/types/blog"

interface Props {
  params: {
    postFileName: string
  }
}

export default async function Post(props: Props) {
  const { default: getPostContent, frontmatter: data }: Post = await import(
    `../(posts)/${props.params.postFileName}.mdx`
  )

  return (
    <div>
      Author: {data.author}
      <div className="mt-5">{getPostContent()}</div>
    </div>
  )
}
