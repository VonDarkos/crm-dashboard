
import type { Customer } from "../types/customers"

export async function getCustomers(): Promise<Customer[]> {  
        const res = await fetch("https://dummyjson.com/users")
        if(!res.ok){
            throw new Error("Errore nel caricamento dei clienti")
        }
        const result = await res.json()
        return result.users  
}

export async function getCustomerById(id:string): Promise<Customer> {
        const res = await fetch(`https://dummyjson.com/users/${id}`)
        if(!res.ok){
            throw new Error("Errore nel caricamento dei clienti")
        }
        const result = await res.json()
        return result
    
} 