import { useEffect, useState } from "react";
import { getOrders } from "../services/ordersService";
import type { Order } from "../types/order";


export default function useOrders() {

    const[orders,setOrders]=useState<Order[]>([])
    const[loading,setLoading]=useState<boolean>(true)
    const[error,setError]=useState<string|null>(null)

    useEffect(()=>{
        async function loadData() {
            try{
                setLoading(true)
                setError(null)
                const data = await getOrders() 
                setOrders(data)
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


  return {orders,loading,error}
}
