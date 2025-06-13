import Link from "next/link";

export default function Button({ children, className = "w-full", link = "#" }) {
  return (
    <Link href={link}>
      <button
        type="submit"
        className={`${className} px-4 py-3 text-white bg-[#FC5285] rounded-md text-sm cursor-pointer active:scale-95 transition-all`}
      >
        {children}
      </button>
    </Link>
  );
}
