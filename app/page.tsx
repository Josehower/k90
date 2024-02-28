import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold">I am Jose</h1>
      <p>
        Hey there! I&apos;m Jose Fernando Hower, a passionate full-stack
        developer based in Vienna. With a knack for turning ideas into reality
        through code, I thrive on creating innovative solutions that make a
        difference.
      </p>
      <br />
      <Link
        passHref
        href="https://example.com"
        className="text-bright-cyan underline visited:text-slate-200"
      >
        Example.com
      </Link>
      <br />
      <button className="rounded-sm bg-neon-red p-1.5 transition-transform hover:scale-105">
        Subscribe
      </button>
      <br />
    </main>
  )
}
