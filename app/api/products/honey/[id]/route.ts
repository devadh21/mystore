import dbConnect from "@app/helpers/sqliteDb";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    
  const autho = req.headers.get("authorization");
  const token = "1234567890abcdefghijklmnopqrstuvwxyz";
  if (autho !== token)
    return NextResponse.json({ status: 401, msg: "Unauthorized" });
  // Open database
  const db = await dbConnect();

  // Extraxt id from url by splitting the url and taking the last element
  const id = req.url.split("/").pop();

  // Retrieve product by id
  const product = await db.get("SELECT * FROM products WHERE id =?", id);
  // Close database
  await db.close();

  // Checking if product finded is found
  if (!product) return NextResponse.json({ msg: "No Products Found" });

  return NextResponse.json({ status: 200, data: product });
}
