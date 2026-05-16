import type { ReactNode } from "react"

interface Props {
  label: string
  helperText?: string
  error?: string
  children: ReactNode
}

export default function FormFieldWrapper({
  label,
  helperText,
  error,
  children,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-zinc-200">
        {label}
      </label>

      {children}

      {helperText && !error && (
        <p className="text-xs text-zinc-400">
          {helperText}
        </p>
      )}

      {error && (
        <p className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}