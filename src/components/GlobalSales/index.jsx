import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';
import { Globe } from 'lucide-react';

const data = [
  { country: 'Turkey', sales: 9, color: '#818CF8' },
  { country: 'India', sales: 12, color: '#34D399' },
  { country: 'Canada', sales: 13, color: '#F472B6' },
  { country: 'Netherlands', sales: 14, color: '#A78BFA' },
  { country: 'US', sales: 16, color: '#60A5FA' },
  { country: 'Italy', sales: 17, color: '#FB7185' },
  { country: 'Other', sales: 19, color: '#FBBF24' },
];

const GlobalSales = () => {
  return (
    <div className="bg-base-100 shadow-sm rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Globe size={18} />
          <h2 className="text-lg font-semibold">Global Sales (%)</h2>
        </div>
        <button className="btn btn-sm btn-outline text-xs">Overview</button>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
        >
          <XAxis type="number" domain={[0, 20]} />
          <YAxis type="category" dataKey="country" width={100} />
          <Tooltip />
          <Bar dataKey="sales" radius={[0, 8, 8, 0]}>
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
            <LabelList
              dataKey="sales"
              position="insideRight"
              formatter={(value, entry) => {
                const country = entry?.payload?.country || '';
                return `${country}: ${value}`;
              }}
              style={{ fill: '#fff', fontWeight: 'bold' }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GlobalSales;
