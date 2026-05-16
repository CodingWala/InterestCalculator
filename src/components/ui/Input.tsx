interface InputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

function Input({ label, value, onChange }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="rounded-xl border p-3 outline-none focus:ring-2"
      />
    </div>
  );
}

export default Input;