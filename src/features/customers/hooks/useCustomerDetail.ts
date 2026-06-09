import { useEffect, useState } from "react"
import { getCustomerById } from "../services/customersService"
import type { Customer } from "../types/customers"

export default function useCustomerDetail(id:string) {


    const [customer, setCustomer] = useState<Customer | null>(null);
    const[loading,setLoading]=useState<boolean>(true)
    const[error,setError]=useState<string|null>(null)

    


    useEffect(()=>{
        async function loadData() {

            try{
                setLoading(true)
                setError(null)
                const data = await getCustomerById(id)
                setCustomer(data)
            }

            catch(err){
                setError("Errore durante il caricamento")
            }
            finally{
                setLoading(false)
            }
            
        }
        loadData()
    },[id])



  return {customer,loading,error} 
}