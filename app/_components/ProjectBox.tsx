import Image from "next/image"
import Link from "next/link"

export default function ProjectBox(props: {
  title: string
  image: string
  github: string
  live?: string
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {props.title}
      <Link
        href={props.live || props.github}
        className="hover:underline-red cursor-pointer rounded-xl border-4 border-transparent transition-all hover:text-neon-red"
        target="_blank"
      >
        <Image
          className="cursor-pointer rounded-xl border-4 border-transparent transition-all hover:border-neon-red"
          src={props.image}
          alt={props.title}
          width={400}
          height={400}
        />
      </Link>
      <div>
        <Link
          href={props.github}
          className="hover:underline-red cursor-pointer rounded-xl border-4 border-transparent transition-all hover:text-neon-red"
          target="_blank"
        >
          GitHub
        </Link>

        {props.live && (
          <>
            |
            <Link
              href={props.live}
              className="hover:underline-red cursor-pointer rounded-xl border-4 border-transparent transition-all hover:text-neon-red"
              target="_blank"
            >
              Live
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
