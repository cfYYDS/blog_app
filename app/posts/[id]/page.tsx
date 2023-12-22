'use client'
import { BreadBrumbs } from '@/components'
import { PageType } from '@/types'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React,{Fragment, useCallback, useEffect, useState}from 'react'

const page = ({params:{id}}:{params:{id:string}}) => {
  const [post,setPost] = useState<PageType|null>(null)
  const [blocks,setBlocks] = useState(null)
  const init =  useCallback(async ()=>{
    await fetch(`/api/post/${id}`).then(res=>res.json()).then(res=>{
const {post,blocks}  =res      
      setPost(post)
      setBlocks(blocks)
    })
  },[blocks,post])
  useEffect( ()=>{
    init()
    console.log('post',post);
    
  },[])
  return (
    <div>
      <BreadBrumbs data={{name:post?.properties.Name.title[0].plain_text as string,path:id}} />
      {
        blocks&&(blocks as [])?.map((block:BlockType,index:any) => {
          return (
            <div key={index}>
              {
                renderBlock(block)
              }
            </div>
          )})
      }
    </div>
  )
}

interface BlockType{
  [key:string]:{
  text:{
    plain_text:string
  }[]
  external:{
    url:string
  }
}|string

}
const renderBlock = (block:any) => {
  switch (block.type) {
    case 'heading_1': 
    // For a heading
      return <h1>{ (block['heading_1'] as any)?.text[0].plain_text } </h1> 
    case 'image': 
    // For an image
      return <Image src={ (block['image'] as any).external.url } width = { 650} height = { 400}  alt=''/>
      case 'bulleted_list_item': 
      // For an unordered list
      return <ul><li>{ (block['bulleted_list_item'] as any).text[0].plain_text } </li></ul >
      case 'paragraph': 
      // For a paragraph
      return <div>{ (block['paragraph'] as any).rich_text?.map((i:any,index:number)=>(
        <Fragment key={index}>
          { i.href?<Link href={i.href}>{i.href&&'Click here'}</Link> :<>{i.text.content}</>}
        </Fragment>
      )) } </div>
    default: 
    // For an extra type
      return <p>Undefined type </p>
  }
}

export default page