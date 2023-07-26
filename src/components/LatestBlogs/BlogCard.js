import Image from 'next/image'
import React from 'react'

export default function BlogCard() {
  return (
    <div className='flex'>
        <Image src={'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80'} alt='img' width={200} height={200}></Image>
        <div className='w-full p-4'>
            <div className='font-semibold flex justify-between pb-4'>
                <p >Author: Ismile Arefin Fahad</p>
                <p>10.2.2023</p>
            </div>
            <p className='text-lg'>Technology is the application of scientific knowledge for achieving practical goals in a reproducible way. It has a profound impact on our lives, making them easier, more efficient, and more connected. It is constantly evolving, and it is up to us to use it responsibly.</p>
        </div>
    </div>
  )
}
