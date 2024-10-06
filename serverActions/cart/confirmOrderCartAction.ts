"use server";

import dbConnect from "@app/helpers/sqliteDb";
import { TcustmersData , IshippingInfo,IProduct} from "@/typings/interfaces";


export const confirmOrderCartAction = async (
  shippingInfo: IshippingInfo,
  productData: any
) => {
      const db = await dbConnect(); 
      const {full_name,adress,phone}:IshippingInfo = shippingInfo; 

      const customer:TcustmersData[] = productData.map((pdt:IProduct)=>{
        const {id,img_url,price,old_price,half_kg,...newPdt} = pdt // remove id,img_url,price,old_price,half_kg from pdt
        const product = {...newPdt,full_name,adress,phone};  // add full_name,adress,phone to pdt 
        return product
      })
      
  
      try {
        customer.map(async(i:any)=>{
            await db.run(
              'INSERT INTO customers (full_name,adress,phone,product,quantity,weight,total_price)  VALUES(?,?,?,?,?,?,?)',
              [i.full_name,i.adress,i.phone,i.name,i.quantity,i.weight,i.total_price]
          )
          })
          await db.close();          
      } catch (error) {
          console.log(error)
          
      } 
};
