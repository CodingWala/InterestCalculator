export interface CompoundInterestInput {
  principal: number
  rate: number
  years: number
}

export interface CompoundInterestResult {
  investedAmount: number
  estimatedReturns: number
  maturityAmount: number
}

export function calculateCompoundInterest({
  principal,
  rate,
  years,
}: CompoundInterestInput): CompoundInterestResult {
  const maturityAmount =
    principal * Math.pow(1 + rate / 100, years)

  return {
    investedAmount: principal,
    estimatedReturns: maturityAmount - principal,
    maturityAmount,
  }
}