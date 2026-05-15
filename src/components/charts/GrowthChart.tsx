import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface GrowthChartProps {
  data: {
    year: number;
    amount: number;
  }[];
}

function GrowthChart({ data }: GrowthChartProps) {
  return (
    <div className="h-96 w-full">
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="amount"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GrowthChart;