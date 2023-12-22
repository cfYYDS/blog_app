import Image from "next/image"
import React from "react"

export default function BadgeRoundedBaseIcon({data}:{data:string}) {
  return (
    <>
      {/*<!-- Component: Rounded icon base sized badge --> */}
      <span className=" gap-1 rounded px-1.5 text-sm ">
      {data}
      </span>
      {/*<!-- End Rounded icon base sized badge --> */}
    </>
  )
}