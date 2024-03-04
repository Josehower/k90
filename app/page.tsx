import { BeakerIcon } from "@heroicons/react/24/solid"
import PostsExerpt from "./_components/PostsExerpt"

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
        Latest Post
      </h2>
      <PostsExerpt limit={1} />
    </main>
  )
}
