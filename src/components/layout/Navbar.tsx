import { Wallet } from 'lucide-react';

function Navbar() {
  return (
    <header className="border-b border-white/10 bg-[#0F172A]/80 backdrop-blur">
      <div className="mx-auto flex h-16 items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-indigo-500/20 p-2">
            <Wallet className="h-5 w-5 text-indigo-400" />
          </div>

          <div>
            <h1 className="text-lg font-semibold">
              InterestCalculator v2
            </h1>
          </div>
        </div>

        <button className="rounded-xl border border-white/10 px-4 py-2 text-sm transition hover:bg-white/5">
          GitHub
        </button>
      </div>
    </header>
  );
}

export default Navbar;