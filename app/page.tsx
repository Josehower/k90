"use client"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

interface Song {
  id: number
  name: string
  lyric?: string
}

const songs: Song[] = [
  { id: 1, name: "Horas y segundos" },
  { id: 2, name: "Tantas cosas" },
  { id: 3, name: "Sucias Palabras" },
  { id: 4, name: "Santamaria" },
  { id: 5, name: "Mientes" },
  {
    id: 6,
    name: "Y Si",
    lyric: `
  Anoche tuve una extraña conversación con la almohada...
  y le pregunte si ha sido suficiente las cosas que me haz dado hasta hoy...

  y me contesto que no hay cosa mas bella que tu risa,
  que si nuestros ojos se encuentran hasta la piel se me eriza,
  que eres lo mas hermoso que en la vida yo soñe,
  que me inspiras con tus labios con tu forma de querer...

  (precoro)
  pues ya todo parece ser mas que un sublime sueño,
  pues hoy todo parece un poco mas real ...

  (Coro)
  y si!!! ya lo puedo decir, que te AMO y que te SIENTO eres tu mi SENTIMIENTO
  y si!!! ya lo puedo gritar, ya no temo a la tristeza ya murió mi soledad

  Así que esta mañana desperté con muchas ansias locas,
  de contemplarte y de rozar con mis mejillas tu boca,
  de ser tu compañero de vivir de realizar,
  de aprender con tu presencia lo que significa amar.

  (precoro)
  pues ya todo parece ser mas que un sublime sueño,
  pues hoy todo parece un poco mas real ...

  (Coro)
  y si!!! ya lo puedo decir, que te AMO y que te SIENTO eres tu mi SENTIMIENTO
  y si!!! ya lo puedo gritar, ya no temo a la tristeza ya murió mi soledad

  (ultimo coro)

  ... ya no temo a la tristeza eres tu... mi realidad
  `,
  },
  { id: 7, name: "Los Chiquillos" },
  { id: 8, name: "Esta vez es verdad" },
  { id: 9, name: "No Acabemos" },
  { id: 10, name: "Pecado" },
  { id: 11, name: "Solo fui un juguete" },
]
export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentSong, setCurrentSong] = useState<Song>(songs[3])
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5
    }
  }, [])

  const pauseAudio = () => {
    if (!audioRef.current) return
    setIsPlaying(false)
    audioRef.current.pause()
  }

  const playAudio = (song: Song) => {
    if (!audioRef.current) return

    setCurrentSong(song)
    setIsPlaying(true)
    audioRef.current.play()
  }

  return (
    <main className="mx-auto my-10 w-11/12 bg-black bg-opacity-80 p-6 md:w-8/12">
      <h1 className="text-center text-4xl font-bold text-band-green">K90</h1>

      <h2 className="text-center text-2xl font-bold">reenKu9ntr0</h2>
      <p>agosto 2024</p>

      <div>
        {currentSong.name}
        <audio ref={audioRef} controls>
          <source src="/songs/santamaria.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      <h2>Repertorio</h2>
      <ul>
        {songs.map((song) => (
          <li
            key={`list-item-song-${song.id}`}
            className="mb-1 flex flex-wrap justify-around p-4"
          >
            <div className="min-w-60 text-center ">{song.name}</div>
            <div className="mt-3 flex flex-grow justify-around md:mt-0">
              <Link
                href={`/#lyric-${song.id}`}
                className="inline-block bg-band-green p-1"
              >
                Letra
              </Link>
              <button
                className="inline-block bg-band-green p-1"
                onClick={() => (isPlaying ? pauseAudio() : playAudio(song))}
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
            </div>
          </li>
        ))}
      </ul>

      {songs.map((song) => (
        <div key={`lyric-div-${song.id}`} className="mt-4">
          <h3
            id={`lyric-${song.id}`}
            className="text-1xl text-center font-bold"
          >
            {song.name}
          </h3>
          {song.lyric && (
            <div>
              <pre className="whitespace-pre-wrap">{song.lyric}</pre>
            </div>
          )}
        </div>
      ))}
    </main>
  )
}
