import { useState } from 'react';
import Input from '../../../components/ui/Input';
import { useCompoundInterest } from '../hooks/useCompoundInterest';

function CompoundInterestForm() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const result = useCompoundInterest({
    principal,
    rate,
    years,
  });

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-bold">
          Compound Interest Calculator
        </h2>

        <div className="space-y-4">
          <Input
            label="Principal Amount"
            value={principal}
            onChange={setPrincipal}
          />

          <Input
            label="Interest Rate"
            value={rate}
            onChange={setRate}
          />

          <Input
            label="Investment Duration"
            value={years}
            onChange={setYears}
          />
        </div>
      </div>

      <div className="rounded-2xl border p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-bold">
          Results
        </h2>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">
              Maturity Amount
            </p>

            <h3 className="text-3xl font-bold">
              ₹{result.maturityAmount.toFixed(2)}
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Interest Earned
            </p>

            <h3 className="text-3xl font-bold text-green-600">
              ₹{result.interestEarned.toFixed(2)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompoundInterestForm;