
import { Inter } from "next/font/google";
import RootLayout from "../components/Layouts/RootLayout";
import Slider from "@/components/BannarSection/Slider";
import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Slider></Slider>
      <LatestBlogs></LatestBlogs>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
