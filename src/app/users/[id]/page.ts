import { NextResponse } from "next/server";

export default function GET(req: Request, {params} : any){
    const {id} = params;

    NextResponse.json({id})
}