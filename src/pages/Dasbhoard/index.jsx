import {BusinessOverview, RevenueStatistics,CustomerAcquisition,RecentOrders, GlobalSales} from '../../components'

const Dashboard = () => {
    return (
        <>
            <BusinessOverview />
            <div className="grid grid-cols-2 gap-4 mb-4 mt-7">
                <RevenueStatistics />
                <CustomerAcquisition />
            </div>

            <div className='grid grid-cols-2 gap-4'>
                <RecentOrders />
                <GlobalSales />
            </div>
        </>
    )
}

export default Dashboard