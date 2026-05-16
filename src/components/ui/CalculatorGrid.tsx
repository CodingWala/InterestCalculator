import {
  ArrowRight,
  ChartSpline,
  Landmark,
  PiggyBank,
} from 'lucide-react';

const calculators = [
  {
    title: 'Compound Interest',
    description:
      'Visualize long-term wealth growth with compounding.',
    icon: Landmark,
  },
  {
    title: 'EMI Calculator',
    description:
      'Estimate monthly loan repayments and amortization.',
    icon: ChartSpline,
  },
  {
    title: 'SIP Calculator',
    description:
      'Forecast SIP investment growth over time.',
    icon: PiggyBank,
  },
];

function CalculatorGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {calculators.map((calculator) => {
        const Icon = calculator.icon;

        return (
          <div
            key={calculator.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-indigo-500/30"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10">
              <Icon className="h-7 w-7 text-indigo-400" />
            </div>

            <h3 className="text-xl font-semibold">
              {calculator.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              {calculator.description}
            </p>

            <button className="mt-8 flex items-center gap-2 text-sm font-medium text-indigo-400 transition hover:gap-3">
              Open Calculator
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default CalculatorGrid;