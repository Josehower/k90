import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold">This Is The Title</h1>
      <p>This is technically a `p` tag</p>
      <code>const x = 123</code>
      <br />
      <Link
        passHref
        href="https://example.com"
        className="text-bright-cyan underline visited:text-slate-200"
      >
        Example.com
      </Link>
      <br />
      <Link
        href="https://google.com"
        className="text-bright-cyan underline visited:text-slate-200"
      >
        google.com
      </Link>
      <br />
      <button className="rounded-sm bg-neon-red p-1.5 transition-transform hover:scale-105">
        Click
      </button>
      <br />
    </main>
  )
}
