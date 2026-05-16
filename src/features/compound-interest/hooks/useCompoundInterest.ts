import { useMemo, useState } from "react"
import { calculateCompoundInterest } from "../services/compoundInterest.service"

export function useCompoundInterest() {
  const [principal, setPrincipal] = useState(100000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(10)

  const results = useMemo(() => {
    return calculateCompoundInterest({
      principal,
      rate,
      years,
    })
  }, [principal, rate, years])

  return {
    principal,
    rate,
    years,

    setPrincipal,
    setRate,
    setYears,

    results,
  }
}