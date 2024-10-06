import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@app/helpers/sqliteDb";

export async function DELETE(req: NextRequest) {
  // open db
  const db = await dbConnect();

  // Close database
  await db.close();

  return NextResponse.json({ status: "Hello World", message: "" });
}