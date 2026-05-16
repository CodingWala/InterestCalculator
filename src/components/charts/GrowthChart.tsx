import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"

import { formatCurrency } from "@/lib/formatters/currency"

interface DataPoint {
  year: number
  value: number
}

interface Props {
  data: DataPoint[]
}

export default function GrowthChart({
  data,
}: Props) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Growth Projection
      </h2>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#27272a" />

            <XAxis
              dataKey="year"
              stroke="#a1a1aa"
            />

            <YAxis
              stroke="#a1a1aa"
              tickFormatter={(value) =>
                `₹${value / 1000}k`
              }
            />

            <Tooltip
              formatter={(value) =>
                formatCurrency(Number(value))
              }
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#818cf8"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}