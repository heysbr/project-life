"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Delete from "@/components/svg/delete.svg";
import Edit from "@/components/svg/edit.svg";

import Pagination from "@/components/dashboard/pagination/Pagination";

import { tableComponentData as tableData } from "@/data/data";
import { tableComponentDataHeaders as headers } from "@/data/data";

const ToggleButton = ({ active }) => {
  const [isActive, setIsActive] = useState(active === "Active");
  return (
    <div className="flex-col py-2 w-full justify-center items-center gap-2 text-sm flex ">
      <div
        className={`w-12 h-6 flex items-center bg-transparent border-2 rounded-full p-1 cursor-pointer ${
          isActive ? "border-green-500" : "border-gray-500"
        }`}
        onClick={() => setIsActive((v) => !v)}
      >
        <div
          className={`w-4 h-4 rounded-full transition-transform duration-300 ${
            isActive
              ? "bg-green-500 translate-x-5"
              : "bg-gray-500 translate-x-0"
          }`}
        />
      </div>

      <p>{isActive ? "Active" : "Inactive"}</p>
    </div>
  );
};

export default function TableComponent() {
  const CARDS_PER_PAGE = 5;
  const [dataList, setDataList] = useState(tableData);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(dataList.length / CARDS_PER_PAGE);
  const startIdx = (page - 1) * CARDS_PER_PAGE;
  const currentData = dataList.slice(startIdx, startIdx + CARDS_PER_PAGE);

  function handleRemove(id) {
    setDataList((prev) => prev.filter((item) => item.id !== id));
    if (page > 1 && currentData.length === 1) {
      setPage((prev) => prev - 1); // shift back if page gets empty
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg w-full overflow-hidden">
      <table className="border-collapse  w-full">
        <thead className="bg-[#FFCCDB]">
          <tr className="text-[#1E1E1E]">
            {headers.map((header) => (
              <th key={header} className="py-3 px-4 text-center font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {currentData.map((data) => (
            <tr
              key={data.id}
              className="border-b border-[#E8E8E8] hover:bg-pink-50 text-center"
            >
              <td className="py-3 px-4 ">{data.id}</td>
              <td className="py-3 px-4 ">{data.hospitalName}</td>
              <td className="py-3 px-4 ">{data.contactNo}</td>
              <td className="py-3 px-4 ">{data.totalStaff}</td>
              <td className="py-3 px-4 ">{data.totalPatient}</td>
              <td className="py-3 px-4 text-[#FF6760] ">{data.highRiskPatient}</td>
              <td className="w-40 "><ToggleButton active={data.status}/></td>
              <td className="py-3 px-4 flex items-center gap-3">
                <Link href="/dashboard/hospital">
                  <Image src={Edit} alt="edit"
                    className="inline cursor-pointer active:scale-90 transition-all"
                  />
                </Link>
                <Image src={Delete} alt="delete" 
                  className="inline cursor-pointer active:scale-90 transition-all"
                  onClick={() => handleRemove(data.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* table Buttons for pagination */}
      <Pagination setPage={setPage} page={page} totalPages={totalPages} />
    </div>
  );
}
