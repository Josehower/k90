import { BeakerIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import PostList from "./_components/PostList"

export default function Home() {
  return (
    <main>
      <h1 className="flex items-center text-4xl font-bold">
        <BeakerIcon className="mr-5 inline w-9" />
        Welcome to my corner of the web!
      </h1>
      <p className="mt-10">
        Welcome! I&apos;m Jose Fernando Höwer Barbosa, a fullstack developer
        passionate about clean code and impactful projects. Colombian-Austrian
        based in Vienna, I embrace challenges and teamwork. Let&apos;s
        collaborate for meaningful solutions.
      </p>
      <h2 className="mt-10 flex items-center text-3xl font-bold">
        Latests Posts
      </h2>
      <PostList />
      <ul>
        <li>
          <Link href="/blog/introduction-to-javascript">
            <h3 className="mt-10 text-xl font-bold hover:underline">
              Introduction to JavaScript
            </h3>
          </Link>
          <p className="mt-3">
            JavaScript, often abbreviated as JS, is a versatile programming
            language primarily used for web development. Here&apos;s what you
            need to know: Frontend Development:{" "}
            <Link
              href="https://www.example.com"
              className="underline-red visited:underline-slate hover:underline-red transition-all hover:text-neon-red"
            >
              Javascript
            </Link>{" "}
            is the backbone of modern web development for creating dynamic and
            interactive websites. It&apos;s used to add behaviors, animations,
            and functionalities to web pages.
          </p>
          <Link
            href="/blog/introduction-to-javascript"
            className="mt-3 block text-right text-neon-red hover:underline"
          >
            Read More
          </Link>{" "}
          <hr className="mt-3" />
        </li>
        <li></li>
      </ul>
      <br />
    </main>
  )
}
