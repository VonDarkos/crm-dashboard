

export type Order= {

    id:number,
    total:number,
    userId:number,
    totalProducts:number,
    totalQuantity:number,
    products:{
        id:number,
        title:string,
        price:number,
        quantity:number,
        total:number;
        thumbnail:string
    }[]

}