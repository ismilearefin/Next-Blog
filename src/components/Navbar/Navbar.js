import Image from 'next/image'
import logo from '../../../public/MOBlog.png'
import Link from 'next/link'

const buttonDesign=`transition border-b-0 duration-300 ease-in hover:text-[#fc0254]`

export default function Navbar() {
  return (
    <div className='border-b-2'>
       <div className='flex justify-center'> <Image src={logo} alt='logo' width={150} height={150}></Image></div>
        <nav className='flex justify-center mb-4'>
           <div className='w-1/3 flex justify-center gap-3 text-lg'>
           <Link className={buttonDesign} href={'/'}>Home</Link>
           <p>|</p>
            <Link className={buttonDesign} href={'/dashboard/allblogs'}>Dashboard</Link>
           <p>|</p>
            <Link className={buttonDesign} href={'/'}>Login</Link>
           </div>
        </nav>
    </div>
  )
}
