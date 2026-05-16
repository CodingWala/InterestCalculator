import CurrencyInput from "@/components/ui/inputs/CurrencyInput"
import NumberInput from "@/components/ui/inputs/NumberInput"
import SliderInput from "@/components/ui/inputs/SliderInput"

import { useCompoundInterest } from "../hooks/useCompoundInterest"

export default function CompoundInterestForm() {
  const {
    principal,
    rate,
    years,
    setPrincipal,
    setRate,
    setYears,
    results,
  } = useCompoundInterest()

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <CurrencyInput
          label="Initial Investment"
          value={principal}
          onChange={setPrincipal}
        />

        <NumberInput
          label="Years"
          value={years}
          onChange={setYears}
        />

        <div className="md:col-span-2">
          <SliderInput
            label="Expected Return %"
            value={rate}
            min={1}
            max={30}
            step={0.5}
            onChange={setRate}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        <h2 className="text-xl font-semibold text-white">
          Results
        </h2>

        <div className="mt-4 text-zinc-300">
          ₹ {results.maturityAmount.toFixed(2)}
        </div>
      </div>
    </div>
  )
}