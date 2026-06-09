
import useCustomers from "../features/customers/hooks/useCustomers"
import StatCard from "../features/dashboard/components/StatCard"
import useOrders from "../features/orders/hooks/useOrders"
import "./DashBoardPage.css"

export default function DashboardPage() {

 
  
  const {users, loading: customersLoading, error:customerError }=useCustomers()
  const{orders,loading:ordersLoading, error:ordersError}=useOrders()
  const isLoading = customersLoading||ordersLoading
  const hasError = customerError||ordersError
  const total = orders.reduce((a,b)=>a+b.total,0)
  const totalQuantity = orders.reduce((a,b)=>a+b.totalQuantity,0)
  const recentCustomers = users.slice(0,5)
  const recentOrders = orders.slice(0,5)


 
  if(isLoading){
    return "Loading..."
  }

  if(hasError){
    return "Error"
  }


  return (
    
    <div className="dashboard-page">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>An overview of customers and orders.</p>
      </div>
        <section className="stats-grid">
            <StatCard title="Total Customers" value={users.length} image="/icons/user.colorable.svg" />
            <StatCard title="Total Orders" value={orders.length} image="/icons/booking.colorable.svg"  />
            <StatCard title="Order Value" value={`${total} €`} image="/icons/money-bag.colorable.svg" />
            <StatCard title="Products sold" value={totalQuantity} image="/icons/sell.colorable.svg" />
        </section>
        <div className="dashboard-columns">
            <section className="dashboard-section">
          <div className="section-header">
            <h2>Recent Clients</h2>
          </div>

          <div className="recent-customers-grid">
            {recentCustomers.map((customer) => (
              <div key={customer.id} className="recent-customer-card">
            <img
              src={customer.image}
              alt={`${customer.firstName} ${customer.lastName}`}
              className="recent-customer-avatar"
            />

            <div className="recent-customer-content">
              <p className="recent-customer-name">
                {customer.firstName} {customer.lastName}
              </p>
              <p className="recent-customer-email">{customer.email}</p>
            </div>
          </div>
            ))}
          </div>
        </section>

        <section className="dashboard-section">
            <div className="section-header">
              <h2>Recent Orders</h2>
            </div>

            <div className="recent-orders-grid">
              {recentOrders.map((order) => {
                const customer = users.find((user) => user.id === order.userId);

                return (
                  <div key={order.id} className="recent-order-card">
                      <div className="recent-order-top">
                        <img
                          src="/icons/checkout.colorable.svg"
                          alt=""
                          className="recent-order-icon"
                        />

                        <p className="recent-order-title">Ordine #{order.id}</p>
                      </div>

                      <div className="recent-order-bottom">
                        <p className="recent-order-customer">
                          {customer ? `${customer.firstName} ${customer.lastName}` : "Cliente non trovato"}
                        </p>

                        <p className="recent-order-total">{order.total.toFixed(2)} €</p>
                      </div>
                    </div>
                );
              })}
            </div>
        </section>
        </div>
       
      </div>
  
  )
}
