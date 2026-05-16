interface Props {
  title: string
  value: string
  subtitle?: string
}

export default function ResultCard({
  title,
  value,
  subtitle,
}: Props) {
  return (
    <div
      className="
        rounded-2xl border border-zinc-800
        bg-zinc-900/60 p-6
        transition hover:border-zinc-700
      "
    >
      <p className="text-sm text-zinc-400">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-white">
        {value}
      </h3>

      {subtitle && (
        <p className="mt-2 text-sm text-zinc-500">
          {subtitle}
        </p>
      )}
    </div>
  )
}