import Image from "next/image";
import React from "react";
import search from "@/components/dashboard/svg/search.svg";
import TableComponent from "./Table";

export default function HospitalList() {
  return (
    <div className="mx-10">
      <h1 className="text-xl font-semibold mt-10 mb-5">Hospital List</h1>
      <div className="flex items-center bg-white rounded-4xl px-3 py-1 w-1/5 h-8 shadow-xl mb-5">
        <Image src={search} alt="search" />
        <input type="text" id="search" name="search" placeholder="Search" 
        className="ml-2 placeholder-[#BEC5D3] text-sm text-[#A0A4A8] focus:outline-none bg-transparent w-full" />
      </div>
      <TableComponent />
    </div>
  );
}
