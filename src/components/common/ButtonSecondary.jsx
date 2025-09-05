import Link from "next/link";

export default function ButtonSecondary(props) {
  function handleClick(e) {
    if (props?.onClick) {
      e.preventDefault();
      props.onClick(e);
    }
  }
  return (
    <Link href={props?.link || "#"}>
      <button
        type="submit"
        className={`${props?.className} ${props?.height || "h-10"} ${
          props?.width || "w-full"
        } px-4  h-10   bg-[#EEF2F3] border-[#BEC5D3] border-1 text-[#9DA2AD] rounded-md text-sm cursor-pointer active:bg-[#E0365A] duration-300 transition-all`}
        onClick={(e) => handleClick(e)}
      >
        {props?.label || "Submit"}
      </button>
    </Link>
  );
}
