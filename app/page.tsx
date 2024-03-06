import Image from "next/image"
import PostsExerpt from "./_components/PostsExerpt"

export default function Home() {
  return (
    <main>
      <h1 className="flex items-center text-4xl font-bold">
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

      <h2 className="mt-10 flex items-center text-3xl font-bold">
        Some of my projects
      </h2>

      <div className="mt-10 grid items-center justify-items-center gap-2 gap-y-8 md:grid-cols-2  md:gap-x-48">
        <div>
          Pokemon Landscape
          <Image
            className="cursor-pointer rounded-xl border-4 border-transparent transition-all hover:border-neon-red"
            src="/images/pokemon-landscape.png"
            alt="pokemon landscape"
            width={400}
            height={400}
          />
          <div>GitHub - Live</div>
        </div>
        <div>
          Barcode Tacker
          <Image
            className="cursor-pointer rounded-xl border-4 border-transparent transition-all hover:border-neon-red"
            src="/images/barcode-tracker.png"
            alt="pokemon landscape"
            width={400}
            height={400}
          />
          <div>GitHub - Live</div>
        </div>
        <div>
          Kill The Dragon
          <Image
            className="cursor-pointer rounded-xl border-4 border-transparent transition-all hover:border-neon-red"
            src="/images/kill-the-dragon.png"
            alt="pokemon landscape"
            width={400}
            height={400}
          />
          <div>GitHub - Live</div>
        </div>
        <div>
          Landing Page Example
          <Image
            className="cursor-pointer rounded-xl border-4 border-transparent transition-all hover:border-neon-red"
            src="/images/landing-page.png"
            alt="pokemon landscape"
            width={400}
            height={400}
          />
          <div>GitHub - Live</div>
        </div>
      </div>
    </main>
  )
}
