import Image from "next/image";
import React from "react";
import Down from "@/components/dashboard/down.svg";

export default function SearchInput({ name, dropdown = false, classname }) {
  return (
    <div className="flex border rounded-4xl px-3 py-1 items-center border-[#A0A4A8]">
      <span className="ml-2 text-[#A0A4A8]" >{name}</span> <Image src={Down} alt="down" className="  ml-20 " />
    </div>
  );
}
