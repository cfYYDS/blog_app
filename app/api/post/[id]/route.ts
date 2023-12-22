import { blocks, post } from "@/lib/notion";
import { NextResponse } from "next/server";

export async function GET(request: Request,{params}:{params:{id:string}}) {
    const {id} = params
    let page_result = await post(id); 
   let { results } = await blocks(id);
   return NextResponse.json({
    id,
    post:page_result,
    blocks:results
   }) 
}