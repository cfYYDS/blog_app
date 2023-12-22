import { posts } from "@/lib/notion";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    let { results } = await posts();
    console.log(results);
    return NextResponse.json(results)
}