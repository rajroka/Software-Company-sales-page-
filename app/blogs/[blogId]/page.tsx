import { getPostById } from '@/app/api/blogs';
import React from 'react'

const page = async({params}) => {
       
  const id = (await params).blogId ;
      const post =  await getPostById(id);
    //  console.log(post);
  return (
    <div className='w-screen min-h-svh px-6 md:px-12 lg:px-24 font-inter       py-5  '>
        
    <div className='bg-gray-200  w-full h-full rounded  p  '>
       <h1 className='text-2xl ' >{post.title}</h1>
        <p className='text-base text-gray-500'>{post.body}</p>
      
    </div>
    </div>
  )
}

export default page

