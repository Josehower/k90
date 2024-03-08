export default function YoutubeEmbeed(props: { url: string; title: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h2 className="max-w-72 text-center">{props.title}</h2>
      <iframe
        className="rounded-xl border-4 border-transparent hover:border-neon-red"
        width="400"
        height="255"
        src={props.url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  )
}
