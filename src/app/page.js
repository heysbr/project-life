import Link from "next/link";

export default function Home() {
  return <Link href={"/login"} className=" flex items-center justify-center h-screen bg-pink-50">
    <button className="border py-2 px-4 rounded-2xl bg-pink-300 active:scale-95 hover:text-white hover:bg">Get Started</button> 
  </Link>
}
