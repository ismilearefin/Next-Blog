
import { Inter } from "next/font/google";
import RootLayout from "../components/Layouts/RootLayout";
import Slider from "@/components/BannarSection/Slider";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Slider></Slider>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
