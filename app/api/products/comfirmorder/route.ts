import { NextRequest,NextResponse } from "next/server";
import dbConnect from "@app/helpers/sqliteDb";

type custmersData={
    full_name :string,
    adress :string,
    phone :string,
    product :string,
    quantity :number,
    weight :number,
    total_price :number

}

export async function  POST(req:NextRequest,res:NextResponse) {
    // open db
    const db = await dbConnect();
    const {full_name,adress,phone,product,quantity,weight,total_price}:custmersData = await req.json(); 
    console.log(full_name,adress,phone,product,quantity,weight,total_price)

    try {
        await db.run(
            'INSERT INTO customers (full_name,adress,phone,product,quantity,weight,total_price)  VALUES(?,?,?,?,?,?,?)',
            [full_name,adress,phone,product,quantity,weight,total_price]
        )
        await db.close();

        return NextResponse.json({stuts:201,message:"ok"});
        
    } catch (error) {
        console.log(error)
        
    }     
}
