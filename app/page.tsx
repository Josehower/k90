/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

interface Song {
  id: number
  slug: string
  name: string
  lyric?: string
  audioFile?: string
}

const songs: Song[] = [
  {
    id: 1,
    slug: "horas-y-segundos",
    name: "Horas y segundos",
    audioFile: "/songs/horas-y-segundos.mp3",
    lyric: `
  Bien sabes que te espero todo el día
  Y solo yo me quedo en esta esquina
  Cuento las horas y los segundos
  Y el sentimiento es más profundo
  Y si regresas solo espero poder decirte

  Coro:

  Que te amo con toda la fuerza del amor
  Te amo con toda el alma y mi gran pasión
  Cuando te hago el amor en la madrugada
  O solo al verte dormir tranquila sobre mi almohada

  Si sales te llevas toda mi vida
  las ganas de sentir y respirar
  Cuento las horas y los segundos
  yo quiero verte eres mi mundo
  y si regresas solo espero poder decirte

  Coro:

  Que te amo con toda la fuerza del amor
  Te amo con toda el alma y mi gran pasión
  Cuando te hago el amor en la madrugada
  O solo al verte dormir tranquila sobre mi almohada
`,
  },
  {
    id: 2,
    slug: "tantas-cosas",
    name: "Tantas cosas",
    audioFile: "/songs/tantas-cosas.mp3",
    lyric: `
  Y es que hay tantas cosas
  Que me gustan de ti
  Y es que hay tantas cosas
  Que al verte me haces sentir

  Es tu piel, tu mirar, tu manera de andar
  Lo que me pone a pensar

  Coro:

  Es que es por ti, nena, que mi razón no encuentra
  La manera de aterrizar
  Es que es por ti, nena, que mi razón no encuentra
  La manera de aterrizar

  Déjame vivir mil cosas más
  Déjame acercarme a ti
  y junto a ti volar

  Coro:

  Es que es por ti, nena, que mi razón no encuentra
  La manera de aterrizar
  Es que es por ti, nena, que mi razón no encuentra
  La manera de aterrizar

  Hace ya unos meses
  Que empezamos a andar
  Y si me preguntas
  Quisiera fueran cien más

  Es que cuando no estás mi vida tiembla
  Todo se hace imposible
  Ya no hay cosas perfectas

  Es que cuando te vas mi vida tiembla
  y se va

  Coro:

  Es que es por ti, nena, que mi razón no encuentra
  La manera de aterrizar
  Es que es por ti, nena, que mi razón no encuentra
  La manera de aterrizar

  Déjame vivir mil cosas más
  Déjame acercarme a ti
  y junto a ti volar

  Coro:

  Es que es por ti, nena, que mi razón no encuentra
  La manera de aterrizar
  Es que es por ti, nena, que mi razón no encuentra
  La manera de aterrizar
    `,
  },
  {
    id: 3,
    slug: "sucias-palabras",
    name: "Sucias Palabras",
    audioFile: "/songs/sucias-palabras.mp3",
  },
  {
    id: 4,
    slug: "santamaria",
    name: "Santamaria",
    audioFile: "/songs/santamaria.mp3",
  },
  {
    id: 5,
    slug: "mientes",
    name: "Mientes",
    lyric: `
  Hoy me pides que deje todo atrás
  Que me arriesgue, enseguida me vas a amar
  Que la luna brilla y el sol calienta
  Te arrepientes y dices cambiaste ya
  Que mi amor es algo que debes guardar
  Y recuerdas lo bien que la pasamos juntos

  Coro:

  Mientes, lo sé muy bien
  Me tomas, miras y dejas, soy el que paga después
  Mientes, lo sé muy bien
  Es que tanto daño ha dado, las heridas se han cerrado, soy inmune a tu veneno al fin

  No me vengas ahora que es verdad
  Sin mi cariño tu vida ya no es igual
  Que tu mundo no vive si no es conmigo

  Ya perdiste, niña, credibilidad
  Me mentiste y ahora debes pagar
  Si sufres y lloras, es tu castigo

  Coro:

  Mientes, lo sé muy bien
  Me tomas, miras y dejas, soy el que paga después
  Mientes, lo sé muy bien
  Es que tanto daño ha dado, las heridas se han cerrado, soy inmune a tu veneno al fin
  `,
  },
  { id: 6, slug: "march", name: "March" },
  {
    id: 7,
    slug: "y-si",
    name: "Y Si",
    lyric: `
  Anoche tuve una extraña conversación
  con la almohada
  y le pregunté si ha sido suficiente
  las cosas que me has dado hasta hoy

  y me contestó que no hay cosa
  más bella que tu risa,
  que si nuestros ojos se encuentran
  hasta la piel se me eriza,
  que eres lo más precioso que en
  la vida yo soñé,
  que me inspiras con tus labios con
  tu forma de querer

  pues ya todo parece ser más
  que un sublime sueño,
  pues hoy todo parece
  un poco más real

  Coro:

  Y sí, ya lo puedo decir,
  que te amo y que te siento
  eres tú mi sentimiento

  Y sí, ya lo puedo gritar,
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

  pues ya todo parece ser más
  que un sublime sueño,
  pues hoy todo parece
  un poco más real

  Coro:

  Y sí, ya lo puedo decir,
  que te amo y que te siento
  eres tú mi sentimiento

  Y sí, ya lo puedo gritar,
  ya no temo a la tristeza
  eres tú mi realidad
  `,
  },
  {
    id: 8,
    slug: "los-chiquillos",
    name: "Los Chiquillos",
    lyric: `
  Juanito tiene cuatro
  Camila tiene un poco más de tres
  Se conocieron en un parque
  Y no importa ya por qué

  Se sentaron en la arena
  a cantar una linda canción
  que enseñaron a la nena
  pero que se sabían los dos

  El padre de Camila
  Era el dueño del banco central
  Era un gran hombre de alcurnia
  De la alta sociedad

  La madre de Juanito
  Limpiaba pisos para poder calmar
  El hambre que tenían
  Hace tres días y algo más

  Coro:

  ¿Por qué los niños pueden jugar
  Sin importar su clase social
  Ni el color de sus manos?
  Son dos iguales, no importa más

  ¿Por qué los niños pueden jugar
  Sin pensar en aparentar
  Mientras los grandes nos matamos
  En una guerra sin final?

  Ella quisiera ser artista
  Él quiere ser todo un doctor
  O tal vez tocar las estrellas
  En su cohete sin motor

  Jugaron juntos toda la tarde
  Y cantaron hasta cansar
  Entre risas inocentes
  Que no saben en qué mundo están

  Coro:

  ¿Por qué los niños pueden jugar
  Sin importar su clase social
  Ni el color de sus manos?
  Son dos iguales, no importa más

  ¿Por qué los niños pueden jugar
  Sin pensar en aparentar
  Mientras los grandes nos matamos
  En una guerra sin final?
  `,
  },
  {
    id: 9,
    slug: "esta-vez-es-verdad",
    name: "Esta vez es verdad",
    lyric: `
  Maldita sea, dime por qué
  me volviste a buscar si no me amas, bebé?
  ¿Por qué justo hoy, cuando he cometido el error de llamarteotra vez,
  me dices ok ok te llamo después?

  coro:

  ya son más de las diez, estoy aquí esperándote
  encontrando recuerdos que creí mate
  pero he decidido una vez más
  que saldrás de mi vida pa' no regresar jamás
  y esta vez es verdad

  entonces adiós es mi última letra
  tu nombre ya nunca volveré a nombrar
  pues hoy esa rueda que gira en contra de mí y me quierematar
  de una patada pondré en su lugar

  coro:

  ya son más de las diez, estoy aquí esperándote
  encontrando recuerdos que creí mate
  pero he decidido una vez más
  que saldrás de mi vida pa' no regresar jamás
  y esta vez es verdad
  `,
  },
  // { id: 10, slug: "no-acabemos", name: "No Acabemos" },
  // { id: 11, slug: "solo-fui-un-juguete", name: "Solo fui un juguete" },
  // { id: 12, slug: "pecado", name: "Pecado" },
]

function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints
}

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentSong, setCurrentSong] = useState<Song>(songs[3])
  const [preSelectedSong, setPreSelectedSong] = useState<Song>()

  const SelectedSong = preSelectedSong || currentSong

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5
    }
  }, [])

  const playAudio = (song: Song) => {
    if (!audioRef.current) return

    setCurrentSong(song)
    setPreSelectedSong(undefined)
    audioRef.current.src = song.audioFile || "/songs/santamaria.mp3"
    audioRef.current.play()
  }

  const audioEnded = (endingSong: Song) => {
    if (!audioRef.current) return

    const nextSong = songs[endingSong.id] || songs[0]
    setCurrentSong(nextSong)
    setPreSelectedSong(undefined)
    audioRef.current.src = nextSong.audioFile || "/songs/santamaria.mp3"
    audioRef.current.play()
  }

  return (
    <main className="mx-auto my-10 w-11/12 rounded-lg bg-black bg-opacity-90 p-2 md:w-8/12 md:p-5">
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
        <img
          src="/images/k90-flyer.jpeg"
          width="120"
          alt="event flyer"
          className="center"
        />{" "}

      <h2 className="mt-4 text-3xl font-bold ">Repertorio:</h2>
      <ul className="mt-4">
        {songs.map((song) => (
          <li
            key={`list-item-song-${song.id}`}
            className={`flex flex-wrap items-center justify-between gap-1 rounded-lg px-2
              ${SelectedSong.id === song.id ? "bg-band-green-dark" : "hover:bg-band-green-dark hover:bg-opacity-60"}
            `}
            onDoubleClick={() => playAudio(song)}
            onClick={() => {
              isTouchDevice() ? playAudio(song) : setPreSelectedSong(song)
            }}
          >
            <div className="flex  py-4">
              {currentSong.id === song.id ? (
                <div className="mr-1">&#9889;</div>
              ) : (
                preSelectedSong?.id === song.id && (
                  <div
                    className="mr-2 cursor-pointer"
                    onClick={() => {
                      playAudio(song)
                    }}
                  >
                    &#9658;{" "}
                  </div>
                )
              )}
              <div>{song.name}</div>
            </div>
            <div>
              <Link
                className="rounded-lg border border-solid bg-black p-2 md:mr-20"
                href={`/#lyric-${song.slug}`}
                onClick={(e) => {
                  e.stopPropagation()
                }}
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
            id={`lyric-${song.slug}`}
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

      <div className="fixed bottom-0 left-0 flex w-full justify-center bg-band-green-dark px-6 py-4">
        <div className="font-semi-bold text-center">
          {currentSong.name} - K90
          <audio
            ref={audioRef}
            controls
            className="mt-4"
            onEnded={() => audioEnded(currentSong)}
          >
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
