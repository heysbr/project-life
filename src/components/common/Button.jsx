// import Link from "next/link";

// export default function Button(props) {
//   function handleClick(e) {
//     if (props?.onClick) {
//       e.preventDefault();
//       props.onClick(e);
//     }
//   }
//   return (
//     <Link href={props?.link || "#"}>
//       <button
//         type="button"
//         className={`${props?.className} ${props?.height || "h-10"} ${
//           props?.width || "w-full"}
//           ${props?.variant === "secondary" ? "bg-[#EEF2F3] border-[#BEC5D3] border-1 text-[#9DA2AD]" : "text-white bg-[#FC5285]"}
//           px-4 h-10 rounded-md text-sm cursor-pointer active:bg-[#E0365A] duration-300 transition-all`}
//         onClick={(e) => handleClick(e)}
//       >
//         {props?.label || "Submit"}
//       </button>
//     </Link>
//   );
// }

"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Button(props) {
  const label = props?.label || "Submit";
  const link = props?.link || "#";
  const onClick = props?.onClick;
  const type = props?.type || "button";
  const className = props?.className || "";
  const height = props?.height || "h-10";
  const width = props?.width;
  const variant = props?.variant || "primary";

  const baseClasses = `
  ${height} 
  ${width} h-10 font-medium
  ${
    variant === "secondary"
      ? "bg-[#EEF2F3] border border-[#BEC5D3] text-[#9DA2AD]"
      : "text-white bg-[#FC5285]"
  }
  px-4 rounded-md text-sm cursor-pointer active:bg-[#E0365A] duration-300 transition-all `;

  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${className}`}
      onClick={link === "#" ? onClick : handleClick}
    >
      {label}
    </button>
  );
}
