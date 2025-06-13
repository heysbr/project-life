import Link from "next/link";

export default function Button(props) {


  return (
    <Link href={props?.link || "#"} >
      <button
        type="submit"
        className={`${props?.className} ${props?.height || "h-10"} ${props?.width || "w-full"} px-4 py-3  h-10 my-auto text-white bg-[#FC5285] rounded-md text-sm cursor-pointer active:scale-95 transition-all`}
      >
        {props?.label || "Submit"}
      </button>
    </Link>
  );
}
