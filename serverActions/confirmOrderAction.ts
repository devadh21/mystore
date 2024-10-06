
'use server'

import dbConnect from "@app/helpers/sqliteDb";


interface IOrderSummaryData {
  product?: string;
  quantity: number;
  weight: string;
  totalPrice?: number;
}
interface IConfirmOrderData {
  full_name: FormDataEntryValue | null; 
  phone: FormDataEntryValue | null;
  adress: FormDataEntryValue | null; 
}

export const confirmOrderAction = async (confirmOrderData2:IConfirmOrderData,OrderSummaryData:IOrderSummaryData)=>{
    await fetch(process.env.URL_SITE +"/api/products/comfirmorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...confirmOrderData2, ...OrderSummaryData }),
      })
        .catch((err) => {
          console.error("Error: ", err);
        });
  };