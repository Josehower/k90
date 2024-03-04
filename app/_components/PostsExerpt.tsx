import fs from "node:fs"
import path from "node:path"
import Link from "next/link"
import { Fragment } from "react"

const postNames = fs.readdirSync(path.join(process.cwd(), "app/blog/(posts)"))

export default async function PostsExerpt(props: Readonly<{ limit?: number }>) {
  const posts = (
    await Promise.all(
      postNames.map(async (name) => {
        return {
          ...(await import(`../../app/blog/(posts)/${name}`)),
          url: `/blog/${name.replace(".mdx", "")}`,
        }
      }),
    )
  ).sort((a, b) => {
    return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
  })

  posts.length = props.limit || posts.length

  return (
    <>
      {posts.map(({ frontmatter: data, default: content, url }) => {
        return (
          <Fragment key={data.title}>
            <Link href={url} className="mt-10 flex items-center">
              <div className="hover:underline-red grow text-xl font-bold">
                {data.title}
              </div>
              <span className="underline-red">
                {new Date(data.date).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </Link>
            <div className="md:max-h-62 mt-5 max-h-56 overflow-hidden">
              {content()}
            </div>
            <Link
              href="/blog/introduction-to-javascript"
              className="hover:underline-red mt-5 block text-right"
            >
              Read More
            </Link>
            <hr className="mt-10" />
          </Fragment>
        )
      })}
    </>
  )
}
