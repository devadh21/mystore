"use server";

import dbConnect from "@/app/helpers/sqliteDb";
import { useSession } from "next-auth/react";
import { IUser } from "@/typings/interfaces";



export  const addNewUser = async (full_name: string, email: string, password: string) => {  

    //Open db
    const db = await dbConnect();

    // Delete  product with the id  from the database.
    try {
      const res = await db.run(
        "INSERT INTO users (full_name,email,password) VALUES (?,?,?)",
        [full_name,email,password]
      );

      return { status: 200, message: "ok" };
    } catch (error) {
      console.log(error);
    } finally {
      db.close()
        .then(() => console.log("Database connection closed."))
        .catch((e) => console.log(e));
    }
  };