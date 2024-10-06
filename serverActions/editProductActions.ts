"use server";

import dbConnect from "@/app/helpers/sqliteDb";
import { revalidatePath } from "next/cache"; 


export  const editProduct = async (formdata: FormData) => {    
    const id = formdata.get("product_id") as string;
    const name = formdata.get("name") as string;
    const price = formdata.get("price") as string;
    const old_price = formdata.get("old_price") as string;
    const half_kg = formdata.get("half_kg") as string;
    const img_url = formdata.get("img_url") as string; 


    //Open db
    const db = await dbConnect(); 

    // Delete  product with the id  from the database.
    try {
      const res = await db.run(
        "UPDATE  products SET name=?,price=?,old_price=?,half_kg=?,img_url=? WHERE id=?",
        [name, price, old_price, half_kg, img_url,id]
      );
      revalidatePath("/admin/products"); // update data  in the page /admin/products after deleting a product.
      return { status: 200, message: "ok" };
    } catch (error) {
      console.log(error);
    } finally {
      db.close()
        .then(() => console.log("Database connection closed."))
        .catch((e) => console.log(e));
    }
  };