"use server";
import dbConnect from "@/app/helpers/sqliteDb";

export default async function newsLatterAction(email:string) {
  //Open db
  const db = await dbConnect();

  try {
    const res = await db.run(
      "INSERT INTO newsLatter (email) VALUES (?)",
      [email]
    );    
    return { status: 200, message: "ok" };
  } catch (error) {
    console.log(error);
  } finally {
    db.close()
      .then(() => console.log("Database connection closed."))
      .catch((e) => console.log(e));
  }
}
