
import type { Order } from "../types/order";

export async function getOrders(): Promise<Order[]>{

    const res = await fetch("https://dummyjson.com/carts")
    if(!res.ok){
        throw new Error ("Errore nel caricamento degli Ordini")
    }
    const result = await res.json()

    return result.carts
    
}