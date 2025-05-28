import { DollarSign, Package, Users, CreditCard } from 'lucide-react';

const stats = [
  {
    title: 'Revenue',
    value: '$587.54',
    icon: <DollarSign size={18} />,
    diff: '+10.8%',
    diffType: 'up',
    subtitle: 'vs. $494.16 last period',
  },
  {
    title: 'Sales',
    value: '4500',
    icon: <Package size={18} />,
    diff: '+21.2%',
    diffType: 'up',
    subtitle: 'vs. 3845 last period',
  },
  {
    title: 'Customers',
    value: '2242',
    icon: <Users size={18} />,
    diff: '–6.8%',
    diffType: 'down',
    subtitle: 'vs. 2448 last period',
  },
  {
    title: 'Spending',
    value: '$112.54',
    icon: <CreditCard size={18} />,
    diff: '+8.5%',
    diffType: 'up',
    subtitle: 'vs. $98.14 last period',
  },
];

const StatCard = ({ title, value, icon, diff, diffType, subtitle }) => {
  const isPositive = diffType === 'up';

  return (
    <div className="bg-base-100 rounded-xl shadow-xl shadow-base-300 p-4 flex flex-col gap-2 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-sm text-muted-foreground font-medium">{title}</h2>
        <div className="bg-muted p-2 rounded-md text-muted-foreground">
          {icon}
        </div>
      </div>
      <div className="text-2xl font-semibold">{value}</div>
      <div className="flex items-center gap-2 text-sm">
        <span
          className={`font-medium ${
            isPositive ? 'text-emerald-500' : 'text-rose-500'
          }`}
        >
          {isPositive ? '↑' : '↓'} {diff}
        </span>
        <span className="text-muted-foreground">{subtitle}</span>
      </div>
    </div>
  );
};

const BusinessOverview = () => {
  return (
    <section className="mt-4">
      <h1 className="text-xl font-semibold mb-4">Business Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default BusinessOverview;
