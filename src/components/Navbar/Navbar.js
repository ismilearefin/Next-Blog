import Image from 'next/image'
import logo from '../../../public/MOBlog.png'
import Link from 'next/link'

const buttonDesign=`transition border-b-0 duration-300 ease-in hover:border-b-2 hover:border-gray-500`


export default function Navbar() {
  return (
    <div className=''>
       <div className='flex justify-center'> <Image src={logo} alt='logo' width={150} height={150}></Image></div>
        <nav className='flex justify-center'>
           <div className='w-1/3 flex justify-center gap-3 text-lg'>
           <Link className={buttonDesign} href={'/'}>Blogs</Link>
           <p>|</p>
            <Link className={buttonDesign} href={'/'}>Feedbacks</Link>
           <p>|</p>
            <Link className={buttonDesign} href={'/'}>Login</Link>
           {/* <p>|</p> */}
           </div>
        </nav>
    </div>
  )
}
