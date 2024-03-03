import fs from "node:fs"
import Link from "next/link"
import path from "node:path"
import { Fragment } from "react"

export default async function CodeHeader() {
  const postsDirectory = path.join(process.cwd(), "app/blog/(posts)")

  const postNames = fs.readdirSync(postsDirectory)

  const posts = await Promise.all(
    postNames.map(async (name) => {
      return {
        ...(await import(`../../app/blog/(posts)/${name}`)),
        url: `/blog/${name.replace(".mdx", "")}`,
      }
    }),
  )

  return (
    <>
      {posts.map(({ frontmatter: data, default: content, url }) => {
        return (
          <Fragment key={data.title}>
            <Link href={url}>
              <h3 className="mt-10 text-xl font-bold hover:underline">
                {data.title}
              </h3>
            </Link>
            {content()}
          </Fragment>
        )
      })}
    </>
  )
}
