import { posts } from "@/lib/notion";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    let { results } = await posts();
    return NextResponse.json({
            paths: results.map((post) => { 
              return {
                params: { 
                  id: post.id
                }
              }
            }),
            fallback: false
    })
}