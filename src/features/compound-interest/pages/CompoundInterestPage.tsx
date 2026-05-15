import CompoundInterestForm from '../components/CompoundInterestForm';

function CompoundInterestPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Finance Toolkit
          </h1>

          <p className="mt-2 text-gray-600">
            Professional financial calculators with insights.
          </p>
        </div>

        <CompoundInterestForm />
      </div>
    </main>
  );
}

export default CompoundInterestPage;