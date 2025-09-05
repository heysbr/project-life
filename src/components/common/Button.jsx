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
          props?.width || "w-full"
        } px-4  h-10  text-white bg-[#FC5285] rounded-md text-sm cursor-pointer active:bg-[#E0365A] duration-300 transition-all`}
        onClick={(e) => handleClick(e)}
      >
        {props?.label || "Submit"}
      </button>
    </Link>
  );
}
