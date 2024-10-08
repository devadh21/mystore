export interface IProduct {
    id: string;
    img_url: string;
    name: string;
    price: string;
    old_price: string;
    half_kg?: string ;
    created_at?: string;
  }
export interface ICustomer { 
    id: string;
    full_name: string;
    adress: string;
    phone: string;
    product: string;
    quantity: string;
    weight: string;
    total_price: string;
    created_at?: string;

  }
  export interface IUser {
    full_name: string;
    email: string;
    password: string;
    
  } 

export interface IOrderSummaryData {
    product?: string;  // product name
    quantity: number;
    weight: string;
    total_price?: number;
  } 
  
export  type TcustmersData={
    // full_name :string,
    // adress :string,
    // phone :string,
    full_name: FormDataEntryValue | null;
    phone: FormDataEntryValue | null;
    adress: FormDataEntryValue | null;
    product_name?:string,
    quantity :number,
    weight :string,
    total_price?:number
  
  }
  
export  interface IproductData {
    product_name?: string;
    quantity: number;
    weight: string;
    total_price?: number;
  }
export  interface IshippingInfo {
    // full_name :string,
    // adress :string,
    // phone :string,
    full_name: FormDataEntryValue | null;
    phone: FormDataEntryValue | null;
    adress: FormDataEntryValue | null;
  }  
  
