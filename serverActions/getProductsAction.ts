'use server'
import dbConnect from "@/app/helpers/sqliteDb";
import { IProduct} from "@/typings/interfaces";


export const getProducts =async (searchKeyword:any)=>{
    //Open db
    const db = await dbConnect(); 

     
    try {
        if(searchKeyword){
            const partialWord = `%${searchKeyword}%`; // Adding '%' wildcards for partial match
            const statement =await db.prepare('SELECT * FROM products WHERE name Like ? OR price Like ? OR old_price Like ? OR half_kg Like ? OR created_at Like ?');
            const result =await statement.all(partialWord,partialWord,partialWord,partialWord,partialWord);
            const data: IProduct[] =result;
            await statement.finalize(); // Finalize the statement after retrieving data
            return data

        }
        // retrieve all products  from the database.
        const data: IProduct[] = await db.all('SELECT * FROM products');
        return data        
    } catch (error) {
        console.log(error);
    } finally {
        db.close()
            .then(() => console.log("Database connection closed."))
            .catch((e) => console.log(e));
    }


};