import { useEffect, useState } from "react"
import { getCustomers } from "../services/customersService"
import type { Customer } from "../types/customers"

export default function useCustomers() {

    const[users,setUsers]=useState<Customer[]>([])
    const[loading,setLoading]=useState<boolean>(true)
    const[error,setError]=useState<string|null>(null)


    useEffect(()=>{
        async function loadData() {

            try{
                setLoading(true)
                setError(null)
                const data = await getCustomers()
                setUsers(data)
            }

            catch(err){
                setError("Errore durante il caricamento")
            }
            finally{
                setLoading(false)
            }
            
        }
        loadData()
    },[])



  return {users,loading,error}
}
