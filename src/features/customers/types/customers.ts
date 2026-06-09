export type Customer= {
    id:number,
    firstName : string,
    email : string
    lastName : string,
    image:string,
    age:number
    address: {
        city:string
    }
    phone:string,
    company:{
        name:string,
        title:string
    }
}