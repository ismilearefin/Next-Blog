import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "../components/Layouts/RootLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <h1>Hello</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
