import Navbar from './Navbar';
import Sidebar from './Sidebar';

import CompoundInterestPage from "@/features/compound-interest/pages/CompoundInterestPage"
function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 lg:p-10">
          <div className="mb-10">
            <h1 className="text-4xl font-bold tracking-tight">
              Finance Toolkit
            </h1>

            <p className="mt-3 text-gray-400 max-w-2xl">
              Professional financial calculators with visual insights,
              projections and analytics.
            </p>
          </div>

          <CompoundInterestPage />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;