// app/admin/dashboard/page.jsx
import products from '@/data/products.json';

export default function Dashboard() {
    // Example dashboard data
    const dashboardData = {
        totalProducts: 50,
        totalOrders: 120,
        totalCustomers: 80,
    };

    return (
        <>
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="card bg-base-100 shadow-xl p-4">
                    <h2 className="card-title">Total Products</h2>
                    <p>{dashboardData.totalProducts}</p>
                </div>
                <div className="card bg-base-100 shadow-xl p-4">
                    <h2 className="card-title">Total Orders</h2>
                    <p>{dashboardData.totalOrders}</p>
                </div>
                <div className="card bg-base-100 shadow-xl p-4">
                    <h2 className="card-title">Total Customers</h2>
                    <p>{dashboardData.totalCustomers}</p>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-4">
      <div>
        <h2 className="text-xl font-bold mb-3">Products Summary</h2>
        {products.map((product) => (
          <div key={product.id} className="mb-2 p-2 shadow">
            <p>{product.name} - ${product.price}</p>
          </div>
        ))}
      </div>
      {/* Similarly add summaries for orders and customers */}
    </div>
        </>
    );
}
