import {
  ChartSpline,
  Landmark,
  PiggyBank,
} from 'lucide-react';

const menuItems = [
  {
    title: 'Compound Interest',
    icon: Landmark,
  },
  {
    title: 'EMI Calculator',
    icon: ChartSpline,
  },
  {
    title: 'SIP Calculator',
    icon: PiggyBank,
  },
];

function Sidebar() {
  return (
    <aside className="hidden w-72 border-r border-white/10 bg-[#0F172A] lg:block">
      <div className="p-6">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wide text-gray-400">
          Calculators
        </h2>

        <div className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                className="flex w-full items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-4 text-left transition hover:border-indigo-500/30 hover:bg-indigo-500/10"
              >
                <Icon className="h-5 w-5 text-indigo-400" />

                <span className="text-sm font-medium">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;