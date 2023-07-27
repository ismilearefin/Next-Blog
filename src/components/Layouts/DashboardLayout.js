import Link from "next/link";


export default function DashboardLayout({children}) {
  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-100 shadow-lg border min-h-screen">
        <div className="grid grid-flow-row text-2xl gap-6 mt-4 p-4 text-[#f8538a]">
          <Link href={'/'} className="border bg-white p-2 hover:text-black">Home</Link>
          <Link href={'allblogs'} className="border bg-white p-2 hover:text-black">Blogs</Link>
          <Link href={'feedback'} className="border p-2 bg-white hover:text-black">Feedbacks</Link>
        </div>
      </div>
      <div className="w-full p-8">{children}</div>
    </div>
  )
}
