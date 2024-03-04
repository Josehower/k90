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
      <h1 className="mb-4 text-4xl font-bold">{data.title}</h1>
      {content()}
    </div>
  )
}
