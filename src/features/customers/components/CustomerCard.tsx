import type { Customer } from "../types/customers";
import { Link } from "react-router-dom";
import "./CustomerCard.css"
type  CustomerCardProps = {
    customer:Customer
}

export default function CustomerCard({customer}:CustomerCardProps) {

    

  return (
    <article className="customer-card">
  <div className="customer-card__top">
    <div className="customer-card__avatar">
      <img src={customer.image} alt="favicon" />
    </div>
  </div>

  <h2 className="customer-card__name">
    {customer.firstName} {customer.lastName}
  </h2>

  <p className="customer-card__email">{customer.email}</p>

  <div className="customer-card__info">
      <p> <img src="/icons/phone-call.colorable.svg"
            alt="" className="customer-card__icon" />
        {customer.phone}
      </p>

      <p> <img src="/icons/location-sign.colorable.svg"
            alt="" className="customer-card__icon" />
        {customer.address.city}
      </p>

      <p> <img src="/icons/building.colorable.svg"
            alt="" className="customer-card__icon" />
        {customer.company.name}
      </p>
      
      <p> <img src="/icons/project-manager.colorable.svg"
            alt="" className="customer-card__icon" />
        {customer.company.title}
      </p>
    
    </div>

  <div className="customer-card__actions">
      <Link className="customer-card__link customer-card__link--detail" to={`/customers/${customer.id}`}>
        Detail
      </Link>

      <Link className="customer-card__link customer-card__link--orders" to={`/orders?customerId=${customer.id}`}>
        Orders
      </Link>
  </div>
</article>
  )
}
