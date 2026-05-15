import { useMemo } from 'react';
import {
  calculateCompoundInterest,
} from '../services/compoundInterest.service';

interface UseCompoundInterestProps {
  principal: number;
  rate: number;
  years: number;
}

export function useCompoundInterest({
  principal,
  rate,
  years,
}: UseCompoundInterestProps) {
  return useMemo(() => {
    return calculateCompoundInterest({
      principal,
      rate,
      years,
    });
  }, [principal, rate, years]);
}