import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";


export default function SingleBlog({blogs}) {
    // console.log(blogs)
    const {image, authorName, publishDate,blogContent} = blogs;
  return (
    <div>
        <h1 className="text-4xl font-semibold text-center pt-8">Blog <span className="text-[#FC0254]">Details</span></h1>
        <div className="min-h-[500px] flex">
        <div className="w-1/2 p-4 grid justify-center items-center">
            <Image src={image} alt="image" width={500} height={500}></Image>
        </div>
        <div className="w-1/2 pr-4 grid items-center content-evenly">
            <div className="text-lg flex justify-between">
                <p>Author:{authorName}</p>
                <p>{publishDate}</p>
            </div>
            <p className="text-3xl">{blogContent}</p>
        </div>
    </div>
    </div>
  )
}

SingleBlog.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:5000/blogs');
    const data = await res.json();

    const paths = data.map((post) => ({
        params: { id: post.id },
      }))


    return { paths, fallback: false }
}

export const getStaticProps = async(context)=>{
    const {params} = context;
    const res = await fetch(`http://localhost:5000/blogs/${params.id}`);
    const data = await res.json();

    return {
        props:{
            blogs:data
        }
    }
}