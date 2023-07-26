import Image from 'next/image'
import React from 'react'

export default function BlogCard({blog}) {
    // console.log(blog)
    const {image, authorName, publishDate,blogContent} = blog
  return (
    <div className='flex h-44'>
        <Image src={image} alt='img' width={200} height={200}></Image>
        <div className='w-full p-4'>
            <div className='font-semibold flex justify-between pb-4'>
                <p >Author: {authorName}</p>
                <p>{publishDate}</p>
            </div>
            <p className='text-lg'>{blogContent && blogContent.slice(0,250) }</p>
        </div>
    </div>
  )
}
