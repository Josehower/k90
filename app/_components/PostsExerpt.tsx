import fs from "node:fs"
import path from "node:path"
import { Post } from "@/types/blog"
import { getExerptContent } from "@/util/blog"
import Link from "next/link"
import { Fragment } from "react"

const postNames = fs.readdirSync(path.join(process.cwd(), "app/blog/(posts)"))

export default async function PostsExerpt(props: { limit?: number }) {
  const posts: Post[] = (
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

  if (props.limit) posts.splice(props.limit)

  return (
    <>
      {posts.map(
        ({ frontmatter: data, default: getPostContent, url }, index) => {
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
              <div className="mt-10">{getExerptContent(getPostContent())}</div>
              <Link
                href="/blog/introduction-to-javascript"
                className="hover:underline-red mt-5 block text-right"
              >
                Read More
              </Link>
              {index !== posts.length - 1 && <hr className="mt-10" />}
            </Fragment>
          )
        },
      )}
    </>
  )
}
