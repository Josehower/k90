import Image from "next/image"
import Link from "next/link"
import PostsExerpt from "./_components/PostsExerpt"
import ProjectBox from "./_components/ProjectBox"
import YoutubeEmbeed from "./_components/YoutubeEmbeed"

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
        <ProjectBox
          title="Pokemon Landscape"
          image="/images/pokemon-landscape.png"
          github="https://github.com/Josehower/poke-landscape"
          live="https://pokemon-landscape.netlify.app/"
        />
        <ProjectBox
          title="Landing Page"
          image="/images/landing-page.png"
          github="https://github.com/Josehower/Landing-page-exercise"
          live="https://jh-landing-page.netlify.app/"
        />
        <ProjectBox
          title="Kill The Dragon"
          image="/images/kill-the-dragon.png"
          github="https://github.com/Josehower/kill-the-dragon"
          live="https://kill-the-dragon.fly.dev/game"
        />
        <ProjectBox
          title="Barcode Tracker"
          image="/images/barcode-tracker.png"
          github="https://github.com/Josehower/barcode-tracking-exercise"
        />
      </div>

      <h2 className="mt-10 flex items-center text-3xl font-bold">
        Public Speaking
      </h2>

      <div className="mt-10 grid items-center justify-items-center gap-2 gap-y-8 md:grid-cols-2  md:gap-x-48">
        <YoutubeEmbeed
          url="https://www.youtube.com/embed/Xt8WdZ8cokI?si=e6ZIIkCAunG-BpDN"
          title="My Learnings Creating a 2d Game: Introduction to react-three-fiber"
        />
        <YoutubeEmbeed
          url="https://www.youtube.com/embed/xWuiI5d84GY?si=6pSwbrToZTPwxgr0"
          title="From Working on a Production Line to Web Development"
        />
      </div>
    </main>
  )
}
