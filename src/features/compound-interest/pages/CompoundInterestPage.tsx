import CompoundInterestForm from "../components/CompoundInterestForm"

export default function CompoundInterestPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">
        Compound Interest Calculator
      </h1>

      <CompoundInterestForm />
    </div>
  )
}