
import { useSearchParams } from "react-router-dom"
import CustomerCard from "../features/customers/components/CustomerCard"
import useCustomers from "../features/customers/hooks/useCustomers"
import type React from "react"
import "./CustomerPage.css"

export default function CustomersPage() {

    const {users,loading,error}=useCustomers()

    const [filterUrl,setFilterUrl]=useSearchParams()
    const search = filterUrl.get("search")|| ""
    const sort = filterUrl.get("sort")|| "asc"


    const readName = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setFilterUrl({search : e.target.value , sort})
    }
    const handleSort = (e:React.ChangeEvent<HTMLSelectElement>)=>{setFilterUrl({sort:e.target.value ,search})}

    const reset = ()=>{setFilterUrl({})}

    const filterName = users.filter((user)=>     
      user.firstName.toLowerCase().includes(search.toLowerCase())||
      user.lastName.toLowerCase().includes(search.toLowerCase()))

     

    const filteredCustomers = [...filterName].sort((a,b)=>{
      if(sort==="asc"){
        return a.firstName.localeCompare(b.firstName) 
      }

      if(sort==="desc"){
        return b.firstName.localeCompare(a.firstName)
      }
      return 0
    })


  return (
  <div className="customers-page">
   {loading && (
      <div className="page-state page-state--loading">
         Loading customers...
      </div>
    )}
    {error && (
      <div className="page-state page-state--error">
        {error}
      </div>
    )}

    <div className="page-header">
      <div>
        <h1>Customers</h1>
        <p>Information about customers who have placed orders</p>
      </div>
    </div>

    <section className="customers-toolbar">
      <input type="text" value={search} onChange={readName} />

      <select value={sort} id="order" onChange={handleSort}>
        <option value="asc">Order: A-Z</option>
        <option value="desc">Order: Z-A</option>
      </select>

      <button onClick={reset}>Reset Filters</button>
    </section>

    {!loading && (
      <p className="customers-count">
        Customers founds: {filteredCustomers.length}
      </p>
    )}

    {!loading && filteredCustomers.length === 0 ? (
      <p className="empty-message">No customers found</p>
    ) : (
      <section className="customers-grid">
        {filteredCustomers.map((user) => (
          <CustomerCard key={user.id} customer={user} />
        ))}
      </section>
    )}
  </div>
);
}
