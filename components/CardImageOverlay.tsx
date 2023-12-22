import { PageType } from "@/types"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { BadgeRoundedBaseIcon } from "."
export default function CardImageOverlay({data,width,height}:{data:PageType,width:number,height:number}) {
  return (
    <>
      {/*<!-- Component: Image overlay card --> */}
      <Link href={`/posts/${data.id}`} className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure className="relative">
          <Image
            alt=''
            src={data.cover?.external.url}
            className="aspect-video w-full"
            width={width}
            height={height}
          />
          {data.icon.type&&<BadgeRoundedBaseIcon data={data.icon.emoji}/>}
          <figcaption className="absolute bottom-0 left-0 w-full p-6 text-white bg-transparent">
            <h3 className="text-lg font-medium ">{  data.properties.Name.title[0].plain_text}</h3>
            <p className="text-sm opacity-75"> {data.created_time}</p>
          </figcaption>
        </figure>
      </Link>
      {/*<!-- End Image overlay card --> */}
    </>
  )
}