import Image from "next/image";
import React from "react";
import search from "@/components/dashboard/svg/search.svg";
import TableComponent from "./Table";

export default function HospitalList() {
  return (
    <div className="mx-10">
      <h1 className="text-xl font-medium mt-10 mb-5">HospitalList</h1>
      <div className="flex rounded-4xl px-3 py-1 items-center bg-white w-1/5 h-8 shadow-xl mb-5">
        <Image src={search} alt="down" className="  " />
        <span className="ml-2 text-[#A0A4A8] ">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search"
            className="   placeholder-[#BEC5D3] text-sm focus:outline-none"
          />
        </span>
      </div>
      <TableComponent/>
    </div>
  );
}
