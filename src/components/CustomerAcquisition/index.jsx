import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { week: 1, customers: 100, advertise: 50 },
  { week: 2, customers: 120, advertise: 60 },
  { week: 3, customers: 130, advertise: 80 },
  { week: 4, customers: 150, advertise: 90 },
  { week: 5, customers: 170, advertise: 100 },
  { week: 6, customers: 200, advertise: 110 },
  { week: 7, customers: 180, advertise: 105 },
  { week: 8, customers: 220, advertise: 120 },
  { week: 9, customers: 190, advertise: 100 },
  { week: 10, customers: 250, advertise: 130 },
  { week: 11, customers: 300, advertise: 150 },
  { week: 12, customers: 350, advertise: 180 },
  { week: 13, customers: 280, advertise: 140 },
  { week: 14, customers: 260, advertise: 120 },
  { week: 15, customers: 240, advertise: 110 },
];

const CustomerAcquisition = () => {
  return (
    <div className="bg-base-100 shadow-sm rounded-xl p-4">
      <h2 className="text-lg font-semibold mb-2">Customer Acquisition</h2>
      <div className="text-sm text-gray-500 mb-2">
        <p>Advertise: <span className="text-green-500">$148 (+4.78%)</span></p>
        <p>Customers: <span className="text-green-500">427 (+3.15%)</span></p>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="customers" stroke="#3b82f6" name="Customer" />
          <Line type="monotone" dataKey="advertise" stroke="#a3a3a3" name="Advertise" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomerAcquisition;
