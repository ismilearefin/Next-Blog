import Image from "next/image";
import BlogImg from "../../../public/blogImg.avif";
import BlogCard from "./BlogCard";
import Link from "next/link";

export default function LatestBlogs({allBlogs}) {
    // console.log(allBlogs)
  return (
    <div className="mx-8 mb-14">
        <h1 className="text-4xl font-semibold text-center py-12">Latest <span className="text-[#FC0254]">Blogs</span></h1>
        <div className="flex">
            <div className="w-1/3">
                <Image src={BlogImg} alt="Blog Img" width={500} height={500} className="p-4"></Image>
            </div>
            <div className="w-2/3 h-[450px] grid gap-y-4 overflow-auto">
                {
                    allBlogs.map(blog =><Link key={blog.id} href={`/blog/${blog.id}`}><BlogCard  blog={blog}></BlogCard></Link>)
                }
            </div>
        </div>
    </div>
  )
}

