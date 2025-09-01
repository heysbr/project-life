"use client";
import React, { useState } from "react";
import StaffCard from "@/components/dashboard/StaffCard";
import PageTitle from "../common/PageTitle";

const CARDS_PER_PAGE = 6;

export default function StaffCards({ data }) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(data.length / CARDS_PER_PAGE);
  const startIdx = (page - 1) * CARDS_PER_PAGE;
  const currentData = data.slice(startIdx, startIdx + CARDS_PER_PAGE);

  return (
    <div className="mb-10 ">
      <PageTitle title={ "All Staff"} btnLabel={ "Add Staff"}  />
      {/* Cards */}
      <div className="grid grid-cols-3 gap-4 ">
        {currentData.map((staff, i) => (
          <StaffCard staff={staff} i={i} key={i} />
        ))}
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
