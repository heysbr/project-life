import Link from "next/link";

export default function SecondaryButton({ children, width = "w-full", link = "#" }) {
  return (
    <Link href={link}>
      <button
        type="submit"
        className={`${width} px-4 py-3 text-[#9DA2AD] bg-[#EEF2F3] h-15 rounded-md text-sm cursor-pointer border--[#9DA2AD] border`}
      >
        {children}
      </button>
    </Link>
  );
}
