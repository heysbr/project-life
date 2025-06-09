import Link from "next/link";

export default function Button({children, width="w-full", link="#"}) {
  return (
    <Link href={link}>
    <button
          type="submit"
          className={`${width} px-4 py-3 text-white bg-[#FC5285] rounded-md hover:bg-[#FFFBFB] hover:ring-[#FC5285] hover:text-[#FC5285] hover:ring-2  text-sm`}
          
          >
          {children}
        </button>
          </Link>
  )
}
