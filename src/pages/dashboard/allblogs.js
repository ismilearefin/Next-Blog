import BlogCard from "@/components/LatestBlogs/BlogCard";
import DashboardLayout from "@/components/Layouts/DashboardLayout.js";
import Link from "next/link";


export default function AllBlogs({allBlogs}) {
    console.log(allBlogs)
  return (
    <div className="mx-8 mb-14">
        <h1 className="text-4xl font-semibold text-center pb-8">All <span className="text-[#FC0254]">Blogs</span></h1>
        <div className="flex">
            <div className="grid gap-y-4">
                {
                    allBlogs.map(blog =><Link className="border border-[#fc6698] p-4 hover:shadow-lg" key={blog.id} href={`/blog/${blog.id}`}><BlogCard  blog={blog}></BlogCard></Link>)
                }
            </div>
        </div>
    </div>
  )
}


AllBlogs.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
  };

  export const getStaticProps = async () =>{
    const res = await fetch('http://localhost:5000/blogs')
    const data = await res.json();
  
    return{
      props:{
        allBlogs: data
      }
    }
  }