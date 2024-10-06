'use server'
import dbConnect from "@app/helpers/sqliteDb";


export default async function  getProductsActions() {
  //open db
  const db = await dbConnect();

  try {
    const products = await db.all("SELECT * FROM products");
    return products
    
  } catch (error) {
    console.log(error);
  } finally {
    db.close()
      .then(() => console.log("Database connection closed."))
      .catch((e) => console.log(e));
  }
}
