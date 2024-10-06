import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@app/helpers/sqliteDb";

export async function POST(req: NextRequest) {
  // open db
  const db = await dbConnect();

  // Close database
  await db.close();

  return NextResponse.json({ status: "Hello World", message: "" });
}
