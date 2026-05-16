interface Props {
  label: string
  value: number
  min: number
  max: number
  step?: number
  onChange: (value: number) => void
}

export default function SliderInput({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
}: Props) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-zinc-300">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-blue-500"
      />
    </div>
  )
}