"use server";
import dbConnect from "@/app/helpers/sqliteDb";

export default async function isEmailActions(email:string) {
  //Open db
  const db = await dbConnect();

  try {
    const res = await db.get(
      "SELECT email FROM newsLatter WHERE email=?",
      [email]
    );   
    return { status: 200, message: "ok", isEmail: !!res }; // data return true  if email exist or false if email not exist.
  } catch (error) {
    console.log(error);
  } finally {
    db.close()
      .then(() => console.log("Database connection closed."))
      .catch((e) => console.log(e));
  }
}
