'use server'

import dbConnect from "@/app/helpers/sqliteDb";
import { ICustomer} from "@/typings/interfaces";


export const getCustomersWithPagination =async (searchKeyword:any,currentPage:any,itemsPerPage:any)=>{
    //Open db
    const db = await dbConnect();    

     
    try {
        // Searck keyword in customers table if it is provided.
        if(searchKeyword){
            const partialWord = `%${searchKeyword}%`; // Adding '%' wildcards for partial match
            const statement =await db.prepare('SELECT * FROM customers WHERE full_name Like ? OR adress Like ? OR phone Like ? OR product Like ? OR quantity Like ? OR weight Like ? OR total_price Like ? OR created_at Like ?');
            const result =await statement.all(partialWord,partialWord,partialWord,partialWord,partialWord,partialWord,partialWord,partialWord);
            const data: ICustomer[] =result;
            await statement.finalize(); // Finalize the statement after retrieving data
            return data

        };
        // handle pagination
        if(currentPage && itemsPerPage ){
            const offset = (currentPage - 1) * itemsPerPage;
            const data =await db.all(`SELECT * FROM customers LIMIT ${itemsPerPage} OFFSET ${offset}`)
            return data
        };
        // retrieve all products  from the database.
        const data: ICustomer[] = await db.all('SELECT * FROM customers');
        return data        
    } catch (error) {
        console.log(error);
    } finally {
        db.close()
            .then(() => console.log("Database connection closed."))
            .catch((e) => console.log(e));
    }


};