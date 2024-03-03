interface Props {
  params: {
    postFileName: string
  }
}

export default async function Post(props: Props) {
  const { default: content, frontmatter: data } = await import(
    `../(posts)/${props.params.postFileName}.mdx`
  )
  console.log(content())
  return (
    <div>
      Author: {data.author}
      {content()}
    </div>
  )
}
