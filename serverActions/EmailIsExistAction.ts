"use server";

import dbConnect from "@/app/helpers/sqliteDb";

export const  EmailIsExistAction = async (email:string) =>{
       //Open db
       const db = await dbConnect();

       // finding email is exist in the database.
       try {
        const result = await db.get("SELECT * FROM users WHERE email = ?", [email]);
        if(result){
            return true;
            }      
       } catch (error) {
         console.log(error);
       } finally {
         db.close()
           .then(() => console.log("Database connection closed."))
           .catch((e) => console.log(e));
       }

}
