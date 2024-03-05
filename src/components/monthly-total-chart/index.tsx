import {
  Bar,
  BarChart as BarChartPrimitive,
  CartesianGrid,
  LabelList,
  LabelProps,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { MonthlyTotalsResult } from '../../lib/types';

const data = [
  {
    name: 'November',
    total: 161.71,
  },
  {
    name: 'December',
    total: 26.77,
  },
];

type MonthlyDataItem = {
  name: string;
  total: number;
};

type MonthlyData = Array<MonthlyDataItem>;

interface CustomLabelProps extends LabelProps {}

interface MonthlyTotalBarChartProps {
  data: MonthlyData;
}

export function MonthlyTotalBarChart({ data }: MonthlyTotalBarChartProps) {
  const formatToDollars = (value: number) => {
    return `$${value.toFixed(2)}`;
  };

  const renderCustomBarLabel = ({
    x,
    y,
    width,
    height,
    value,
  }: CustomLabelProps) => {
    if (
      typeof x !== 'number' ||
      typeof y !== 'number' ||
      typeof width !== 'number' ||
      typeof value !== 'number'
    )
      return;
    return (
      <text
        x={x + width / 2}
        y={y + 20}
        fill="white"
        textAnchor="middle"
        dominantBaseline="bottom"
      >
        {`$${value.toFixed(2)}`}
      </text>
    );
  };
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChartPrimitive
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={formatToDollars} />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="total"
          fill="#f9a109"
          activeBar={<Rectangle fill="#ffcb70" />}
        >
          <LabelList dataKey="total" content={renderCustomBarLabel} />
        </Bar>
      </BarChartPrimitive>
    </ResponsiveContainer>
  );
}
