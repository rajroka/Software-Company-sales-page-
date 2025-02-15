import Link from 'next/link'
import React from 'react'

const Card = ({post}) => {
  return (
    <div className=' p-8   font-inter space-y-2 bg-white rounded shadow-lg backdrop-blur-xl'>
        <Link href={`/blogs/${post.id}`}><h2  className='text-xl  font-medium '>{post.title}</h2></Link>
        <p className='text-base text-gray-700'>{post.body}</p>
      
    </div>
  )
}

export default Card
