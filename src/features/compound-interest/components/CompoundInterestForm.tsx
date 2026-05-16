import CurrencyInput from "@/components/ui/inputs/CurrencyInput"
import NumberInput from "@/components/ui/inputs/NumberInput"
import SliderInput from "@/components/ui/inputs/SliderInput"

import GrowthChart from "@/components/charts/GrowthChart"

import { generateProjectionData } from "../utils/generateProjectionData"

import ResultCard from "@/components/ui/cards/ResultCard"

import { formatCurrency } from "@/lib/formatters/currency"

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

  const chartData = generateProjectionData({
    principal,
    rate,
    years,
  })

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

      <div className="grid gap-4 md:grid-cols-3">
        <ResultCard
          title="Invested Amount"
          value={formatCurrency(results.investedAmount)}
        />

        <ResultCard
          title="Estimated Returns"
          value={formatCurrency(results.estimatedReturns)}
        />

        <ResultCard
          title="Total Value"
          value={formatCurrency(results.maturityAmount)}
        />
      </div>

      <GrowthChart data={chartData} />
    </div>
  )
}