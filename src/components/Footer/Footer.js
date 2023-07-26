import Image from "next/image";
import logo from '../../../public/MOBlog.png'
import {BsFacebook, BsInstagram,BsPinterest,BsTwitter,BsYoutube} from 'react-icons/bs'

export default function Footer() {
  return (
    <div className="px-8 border-t-2">
      <div className="h-72 flex">
        <div className="w-1/2 grid justify-center items-center">
        <div className="">
        <div className="w-full flex justify-center">
        <Image src={logo} alt='logo' width={100} height={100}></Image>
        </div>
        <p className="text-center">Whether youre a seasoned writer or just starting, MoBlog supports and inspires you on your blogging journey. Share travel adventures, culinary delights, thought-provoking ideas, or pour your heart out - MoBlog is your canvas. With a user-friendly interface and robust features, crafting captivating posts is a breeze.</p>
        </div>
        </div>
        <div className="w-1/2 grid items-center pl-10">
        <div className="">
          <div className="">
          <p className="text-2xl font-bold mb-4">Subscribe to our newsletter</p>
          <div className="flex gap-2">
            <input className="w-2/3 shadow-md pl-4 border" type="email" placeholder="Your Email"></input>
            <button className="font-semibold w-1/3 border py-4 bg-[#FC0254] text-white">Subscribe</button>
          </div>
          </div>
          <div className="flex justify-evenly text-4xl mt-8">
            <BsFacebook></BsFacebook>
            <BsInstagram></BsInstagram>
            <BsPinterest></BsPinterest>
            <BsTwitter></BsTwitter>
            <BsYoutube></BsYoutube>
          </div>
          </div>
        </div>
      </div>
      <p className="text-right text-gray-400">Copyright ©2023 All rights reserved | This template is made with  by Ismile Arefin</p>
    </div>
  )
}
