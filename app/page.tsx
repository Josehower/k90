/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

interface Song {
  id: number
  name: string
  lyric?: string
  audioFile?: string
}

const songs: Song[] = [
  { id: 1, name: "Horas y segundos", audioFile: "/songs/horas-y-segundos.mp3" },
  { id: 2, name: "Tantas cosas" },
  { id: 3, name: "Sucias Palabras" },
  { id: 4, name: "Santamaria", audioFile: "/songs/santamaria.mp3" },
  { id: 5, name: "Mientes" },
  {
    id: 6,
    name: "Y Si",
    lyric: `
  Anoche tuve una extraña conversación
  con la almohada
  y le pregunte si ha sido suficiente
  las cosas que me haz dado hasta hoy

  y me contesto que no hay cosa
  mas bella que tu risa,
  que si nuestros ojos se encuentran
  hasta la piel se me eriza,
  que eres lo mas hermoso que en
  la vida yo soñe,
  que me inspiras con tus labios con
  tu forma de querer

  pues ya todo parece ser mas
  que un sublime sueño,
  pues hoy todo parece
  un poco mas real

  Coro:

  Y si! ya lo puedo decir,
  que te amo y que te siento
  eres tu mi sentimiento

  y si! ya lo puedo gritar,
  ya no temo a la tristeza
  ya murió mi soledad

  Así que esta mañana desperté con muchas
  ansias locas,
  de contemplarte y de rozar con mis
  mejillas tu boca,
  de ser tu compañero de vivir
  de realizar,
  de aprender con tu presencia
  lo que significa amar.

  pues ya todo parece ser mas
  que un sublime sueño,
  pues hoy todo parece
  un poco mas real

  Coro:

  Y si! ya lo puedo decir,
  que te amo y que te siento
  eres tu mi sentimiento

  y si! ya lo puedo gritar,
  ya no temo a la tristeza
  eres tu mi realidad
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

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5
    }
  }, [])

  const playAudio = (song: Song) => {
    if (!audioRef.current) return

    setCurrentSong(song)
    audioRef.current.src = song.audioFile || "/songs/santamaria.mp3"
    audioRef.current.play()
  }

  return (
    <main className="mx-auto my-10 w-11/12 rounded-lg bg-black bg-opacity-90 p-2 md:w-8/12">
      <h1 className="text-4xl font-bold">
        <img
          src="/images/k90icon.png"
          width="70"
          alt="band logo"
          className="inline"
        />{" "}
        reen
        <span className="text-band-green">K</span>u
        <span className="text-band-green">9</span>ntr
        <span className="text-band-green">0</span>
      </h1>

      <h2 className="font-semi-bold mt-2 text-2xl">Agosto 2024</h2>

      <h2 className="mt-4 text-3xl font-bold ">Repertorio:</h2>
      <ul className="mt-4">
        {songs.map((song) => (
          <li
            key={`list-item-song-${song.id}`}
            className={`flex flex-wrap items-center justify-around gap-1 rounded-lg px-2 py-4
              ${currentSong.id === song.id ? "bg-band-green-dark" : ""}
            `}
          >
            <div className="flex w-40" onClick={() => playAudio(song)}>
              {currentSong.id === song.id && (
                <div className="mr-1">&#9889; </div>
              )}
              <div>{song.name}</div>
            </div>
            <div className="flex flex-grow justify-around">
              <Link
                className="rounded-lg border border-solid bg-black p-2"
                href={`/#lyric-${song.id}`}
              >
                Letra
              </Link>
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
              <p className="whitespace-pre-wrap">{song.lyric}</p>
            </div>
          )}
        </div>
      ))}

      <div className="bg-band-green-dark fixed bottom-0 left-0 flex w-full justify-center px-6 py-4">
        <div className="font-semi-bold text-center">
          {currentSong.name} - K90
          <audio ref={audioRef} controls className="mt-4">
            <source
              src={currentSong.audioFile || "/songs/santamaria.mp3"}
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </main>
  )
}
