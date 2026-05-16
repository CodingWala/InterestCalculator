import FormFieldWrapper from "./FormFieldWrapper"

interface Props {
  label: string
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  helperText?: string
  error?: string
}

export default function NumberInput({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  helperText,
  error,
}: Props) {
  return (
    <FormFieldWrapper
      label={label}
      helperText={helperText}
      error={error}
    >
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="
          w-full rounded-xl border border-zinc-700
          bg-zinc-900 px-4 py-3
          text-white outline-none
          transition focus:border-blue-500
        "
      />
    </FormFieldWrapper>
  )
}