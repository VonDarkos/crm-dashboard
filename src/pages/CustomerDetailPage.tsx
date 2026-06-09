
import { useParams,useNavigate } from "react-router-dom"
import useCustomerDetail from "../features/customers/hooks/useCustomerDetail"
import "./CustomerDetailPage.css"

export default function CustomerDetailPage() {


const{id} = useParams<{id:string}>()

const {customer,loading,error} =useCustomerDetail(id ?? "")
const navigate = useNavigate()
if(!id){
    return <h1>Customer Not Found</h1>
}

if(!customer){
  return <p>Customer Not Found</p>
}







  return (
    <div>
      
      {loading&&"Loading ..."}
      {error&&<p>{error}</p>}

      <div className="customer-detail-page">
  <button className="back-button" onClick={() => navigate(-1)}>
    Back
  </button>

  <article className="customer-detail-card">
    <img
      src={customer.image}
      alt={`${customer.firstName} ${customer.lastName}`}
      className="customer-detail-avatar"
    />
    <h2>
      {customer.firstName} {customer.lastName}
    </h2>
    <div className="customer-detail-info">
      <p>
        <img src="/icons/user.colorable.svg" alt="" />
        Age: {customer.age}
      </p>
      <p>
        <img src="/icons/email.colorable.svg" alt="" />
        {customer.email}
      </p>
      <p>
        <img src="/icons/phone-call.colorable.svg" alt="" />
        {customer.phone}
      </p>
      <p>
        <img src="/icons/location-sign.colorable.svg" alt="" />
        {customer.address.city}
      </p>
      <p>
        <img src="/icons/building.colorable.svg" alt="" />
        {customer.company.name}
      </p>

      <p>
        <img src="/icons/project-manager.colorable.svg" alt="" />
        {customer.company.title}
      </p>
    </div>
  </article>
</div>
    </div>
  )
}
