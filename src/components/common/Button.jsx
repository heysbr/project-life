import Link from "next/link";

export default function Button(props) {
  function handleClick(e) {
    if (props?.onClick) {
      e.preventDefault();
      props.onClick(e);
    }
  }
  return (
    <Link href={props?.link || "#"}>
      <button
        type="button"
        className={`${props?.className} ${props?.height || "h-10"} ${
          props?.width || "w-full"} 
          ${props?.variant === "secondary" ? "bg-[#EEF2F3] border-[#BEC5D3] border-1 text-[#9DA2AD]" : "text-white bg-[#FC5285]"}
          px-4 h-10 rounded-md text-sm cursor-pointer active:bg-[#E0365A] duration-300 transition-all`}
        onClick={(e) => handleClick(e)}
      >
        {props?.label || "Submit"}
      </button>
    </Link>
  );
}