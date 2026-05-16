import NumberInput from "./NumberInput"

interface Props {
  label: string
  value: number
  onChange: (value: number) => void
}

export default function CurrencyInput(props: Props) {
  return (
    <NumberInput
      {...props}
      helperText="Amount in INR"
    />
  )
}