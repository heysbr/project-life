"use client";
import WardCard from "@/components/dashboard/WardCard";
import HospitalSearchField from "@/components/dashboard/HospitalSearchField";
import SortByFilter from "@/components/dashboard/SortByFilter";
import Button from "@/components/common/Button";

import Link from "next/link";
import { useState } from "react";

export default function WardGroup() {
   const [page, setPage] = useState(1);
  
    const totalPages = Math.ceil(9 / 6);
  return (
    // <div className="flex flex-col mx-10 mt-15 h-fit ">
    //   <div className="flex flex-row gap-x-7 border-b-2 border-[#CFD2D7] pl-9">
    //     <div className=" px-7 rounded-t-lg py-2 h-full text-[#25282B] ">
    //       <Link href="/dashboard/all-hospitals/staff">Staff</Link>
    //     </div>
    //     <div className="bg-[#FC5285] px-7 outline-[#FC5285] outline-2 rounded-t-lg py-2 h-full text-[#FFFFFF] ">
    //       <Link href="/dashboard/all-hospitals/wards">Wards</Link>
    //     </div>
    //   </div>

    //   <h1 className="font-bold mt-12 mb-8"> Staff List</h1>

    //   <div className="flex flex-row justify-between">
    //     <div className="flex flex-row gap-x-5">
    //       <HospitalSearchField /> <SortByFilter />
    //     </div>
    //     <Button label="Add Staff" width="w-32" />
    //   </div>

    //   <div className="my-10 h-fit">
    //     <div className="grid grid-cols-3 gap-6 w-full mb-10 ">
    //       <WardCard />
    //       <WardCard />
    //       <WardCard />
    //       <WardCard />
    //       <WardCard />
    //       <WardCard />
    //       <WardCard />
    //       <WardCard />
    //       <WardCard />
    //     </div>
    //   </div>
    // </div>
    <div className="mb-10 ">
      {/* Cards */}
      <div className="grid grid-cols-3 gap-6 w-full mb-10 ">
        <WardCard />
        <WardCard />
        <WardCard />
        <WardCard />
        <WardCard />
        <WardCard />
        <WardCard />
        <WardCard />
        <WardCard />
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-end mt-6 space-x-2">
          {/* Previous Butoon */}
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1 cursor-pointer rounded border border-[#E8E8E8] disabled:opacity-50"
          >
            <Svg2 />
          </button>

          {/* Numbers Button */}
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx + 1)}
              className={`px-3 py-1 rounded cursor-pointer ${
                page === idx + 1
                  ? "bg-[#FC5285] text-white"
                  : "border-[#E8E8E8] border"
              }`}
            >
              {idx + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-3 py-1 cursor-pointer rounded border border-[#E8E8E8] disabled:opacity-50 transition-all duration-300"
          >
            <Svg1 />
          </button>
        </div>
      )}
    </div>
  );
}

function Svg1() {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.28811 13.0482L11.0881 8.24824L6.28811 3.44824L4.92811 4.80824L8.35211 8.24824L4.91211 11.6882L6.28811 13.0482Z"
        fill="#52575C"
      />
    </svg>
  );
}

function Svg2() {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.7">
        <path
          d="M9.71211 3.44824L4.91211 8.24824L9.71211 13.0482L11.0881 11.6882L7.64811 8.24824L11.0881 4.80824L9.71211 3.44824Z"
          fill="#52575C"
        />
      </g>
    </svg>
  );
}
