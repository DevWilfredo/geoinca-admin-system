// components/RevenueStatistics.jsx
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';

const data = [
    { year: '2016', revenue: 40, orders: 30 },
    { year: '2017', revenue: 45, orders: 35 },
    { year: '2018', revenue: 43, orders: 33 },
    { year: '2019', revenue: 60, orders: 40 },
    { year: '2020', revenue: 65, orders: 45 },
    { year: '2021', revenue: 70, orders: 48 },
    { year: '2022', revenue: 75, orders: 50 },
    { year: '2023', revenue: 90, orders: 60 },
    { year: '2024', revenue: 100, orders: 68 },
    { year: '2025', revenue: 50, orders: 30 },
];

const RevenueStatistics = () => {
    return (
        <div className="bg-base-100 shadow-sm rounded-xl p-4">
            <h2 className="text-lg font-semibold mb-2">Revenue Statistics</h2>
            <p className="text-sm text-gray-500 mb-2">$184.78K · <span className="text-green-500">+3.24%</span></p>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="orders" stackId="a" fill="#f97316" name="Orders" />
                    <Bar dataKey="revenue" stackId="a" fill="#6366f1" name="Revenue" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RevenueStatistics;
