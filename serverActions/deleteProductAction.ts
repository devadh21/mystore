'use server'
import dbConnect from "@/app/helpers/sqliteDb";
import { revalidatePath } from "next/cache";


export const deleteProductById =async (id:string)=>{
    //Open db
    const db = await dbConnect();  

    // Delete  product with the id  from the database.
    try {
        const res = await db.run('DELETE FROM products WHERE id =?',[id]);
        revalidatePath("/admin/products");  // update data  in the page /admin/products after deleting a product.
        return {'status':200,"message":"ok"}        
    } catch (error) {
        console.log(error);
    } finally {
        db.close()
            .then(() => console.log("Database connection closed."))
            .catch((e) => console.log(e));
    }


};