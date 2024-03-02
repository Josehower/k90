import { BeakerIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1 className="mt-10 text-4xl font-bold">
        Welcome to my corner of the web!
      </h1>
      <p className="mt-10">
        Welcome! I&apos;m Jose Fernando Höwer Barbosa, a fullstack developer
        passionate about clean code and impactful projects. Colombian-Austrian
        based in Vienna, I embrace challenges and teamwork. Let&apos;s
        collaborate for meaningful solutions.
      </p>
      <br />
      <Link
        passHref
        href="https://example.com"
        className="underline-red visited:underline-slate hover:underline-red transition-all hover:text-neon-red"
      >
        Example.com
      </Link>
      <br />
      <BeakerIcon className="inline h-6 w-6" />
      <br /> <br /> <br /> <br />
      <button className="mr-3 rounded-sm border-2 border-slate-200 px-4 py-2 transition-all hover:border-2 hover:border-neon-red hover:bg-neon-red hover:bg-opacity-30">
        Subscribe
      </button>
      <br />
    </main>
  )
}
