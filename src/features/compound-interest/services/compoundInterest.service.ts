export interface CompoundInterestInput {
  principal: number;
  rate: number;
  years: number;
}

export interface CompoundInterestResult {
  maturityAmount: number;
  interestEarned: number;
}

export function calculateCompoundInterest(
  input: CompoundInterestInput
): CompoundInterestResult {
  const { principal, rate, years } = input;

  const maturityAmount =
    principal * Math.pow(1 + rate / 100, years);

  return {
    maturityAmount,
    interestEarned: maturityAmount - principal,
  };
}