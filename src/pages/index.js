
import { Inter } from "next/font/google";
import RootLayout from "../components/Layouts/RootLayout";
import Slider from "@/components/BannarSection/Slider";
import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";


const inter = Inter({ subsets: ["latin"] });

export default function Home({allBlogs}) {
  return (
    <div className="">
      <Slider></Slider>
      <LatestBlogs allBlogs={allBlogs}></LatestBlogs>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
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