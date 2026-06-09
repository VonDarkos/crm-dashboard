import type { Order } from "../types/order";
import type { Customer } from "../../customers/types/customers";
import "./OrderCard.css"

type OrderCardProps = {
    order: Order
    customer:Customer | undefined
}

export default function OrderCard({order,customer}:OrderCardProps) {



  return (
    <article className="order-card">
      <div className="order-card__header">
        <div>
          <p className="order-card__label">Customer</p>
          <h2>{customer ? `${customer.firstName} ${customer.lastName}` : "Client not found"}</h2>
        </div>

        <span className="order-card__id">#{order.id}</span>
      </div>

      <div className="order-card__summary">
        <p>Total: <strong>{order.total.toFixed(2)} €</strong></p>
        <p>Products: <strong>{order.totalProducts}</strong></p>
        <p>Quantity: <strong>{order.totalQuantity}</strong></p>
      </div>

      <div className="order-card__products">
        {order.products.map((product) => (
          <div key={product.id} className="order-product">
            <img src={product.thumbnail} alt={product.title} />

            <div className="order-product__content">
              <h3>{product.title}</h3>
              <p>Quantity: {product.quantity}</p>
            </div>

            <strong>{product.total.toFixed(2)} €</strong>
          </div>
        ))}
      </div>
    </article>
  )
}
