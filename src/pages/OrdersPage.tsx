import { useSearchParams,useNavigate } from "react-router-dom";
import type React from "react";
import useOrders from "../features/orders/hooks/useOrders";
import OrderCard from "../features/orders/components/OrderCard";
import useCustomers from "../features/customers/hooks/useCustomers";
import "./OrdersPage.css"
export default function OrdersPage() {
  const { orders, loading, error } = useOrders();
  const { users } = useCustomers();
  const [filtriUrl, setFiltriUrl] = useSearchParams();
  const search = filtriUrl.get("search") || "";
  const customerId = filtriUrl.get("customerId");
  const navigate = useNavigate()
  const readName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newParams: Record<string, string> = {
      search: e.target.value,
    };

    if (customerId) {
      newParams.customerId = customerId;
    }

    setFiltriUrl(newParams);
  };

  const ordersFiltered = orders.filter((order) => {
    if (customerId && order.userId !== Number(customerId)) {
      return false;
    }

    const customer = users.find((user) => user.id === order.userId);

    if (!customer) {
      return false;
    }

    return (
      customer.firstName.toLowerCase().includes(search.toLowerCase()) ||
      customer.lastName.toLowerCase().includes(search.toLowerCase())
    );
  });

 return (
  <div className="orders-page">
    {loading && <div className="page-state page-state--loading">Loading orders...</div>}
    {error && <div className="page-state page-state--error">{error}</div>}

      <div className="page-header">
        <div>
          <h1>Orders</h1>
          <p>View orders and associated customers.</p>
        </div>

        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>

      <section className="orders-toolbar">
        <input
          type="text"
          value={search}
          onChange={readName}
          placeholder="Search by customer name..."
        />

        <p className="orders-count">Total orders: {ordersFiltered.length}</p>
      </section>

    {!loading && ordersFiltered.length === 0 ? (
      <p className="empty-message">No orders found</p>
    ) : (
      <section className="orders-grid">
        {ordersFiltered.map((order) => {
          const customer = users.find((user) => user.id === order.userId);

          return <OrderCard key={order.id} order={order} customer={customer} />;
        })}
      </section>
    )}
  </div>
);
}