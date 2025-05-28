// components/RecentOrders.jsx
const recentOrders = [
  { id: '#OD1711', name: 'Kristin Watson', amount: '$148.00', status: 'Paid', date: '2024-05-02' },
  { id: '#OD1712', name: 'Esther Howard', amount: '$212.00', status: 'Pending', date: '2024-05-03' },
  { id: '#OD1713', name: 'Guy Hawkins', amount: '$112.00', status: 'Paid', date: '2024-05-04' },
  { id: '#OD1714', name: 'Jenny Wilson', amount: '$320.00', status: 'Refunded', date: '2024-05-05' },
  { id: '#OD1715', name: 'Cody Fisher', amount: '$98.00', status: 'Paid', date: '2024-05-06' },
];

const statusColor = {
  Paid: 'badge-success',
  Pending: 'badge-warning',
  Refunded: 'badge-error',
};

const RecentOrders = () => {
  return (
    <div className="bg-base-100 shadow-xl shadow-base-300 rounded-xl p-4 overflow-x-auto">
      <h2 className="text-lg font-semibold mb-2">Recent Orders</h2>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.name}</td>
              <td>{order.amount}</td>
              <td>
                <span className={`badge ${statusColor[order.status]}`}>
                  {order.status}
                </span>
              </td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
