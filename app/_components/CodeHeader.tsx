interface Props {
  text: string
}

export default function CodeHeader({ text }: Props) {
  return (
    <div className="rounded-t-md bg-zinc-200 px-4 py-2 font-mono text-sm text-neutral-700 dark:bg-zinc-700 dark:text-neutral-300">
      {text}
    </div>
  )
}
