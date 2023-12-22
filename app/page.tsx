"use client"
import { NextPage } from 'next';
import { Fragment, Suspense, useEffect ,useState} from 'react';
import { PageType } from '../types/index';
import { CardImageOverlay } from '@/components';
const Home: NextPage = ( ) => {
  const [posts, setPosts] = useState<PageType[]>([])
  useEffect(()=>{
   fetch('/api/posts').then(res=>res.json()).then((data:PageType[])=>{
    setPosts(data)
    console.log(data);
    
   })
  },[])
  return(
    <main className='flex mt-10 px-4 flex-col  items-center gap-8'>
      <h1 className='text-4xl font-bold'>
      Latest posts
      </h1>
      <div className='flex gap-4'>
      {
        posts&&posts.map((result:PageType,index:any) => 
       (
          <Fragment key={index}>
            <CardImageOverlay data={result} width={450} height={200}/>
          </Fragment>
        )
        )
       }
       </div>
    </main>
  )
}
export default Home;
