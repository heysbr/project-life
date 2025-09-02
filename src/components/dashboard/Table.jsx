"use client";
import Image from "next/image";
import Delete from "@/components/svg/delete.svg";
import Edit from "@/components/svg/edit.svg";
import Arrow from "@/components/svg/Arrow.svg";

import { useState } from "react";

import { tableComponentData as tableData } from "@/data/data";

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

const headers = [
  "S. No.",
  "Hospital Name",
  "Contact No.",
  "Total Staff",
  "Total Patient",
  "High Risk Patient",
  "Status",
  "Action",
];

export default function TableComponent() {
  return (
    <div className="flex items-center w-full pb-10">
      <div className="bg-white shadow-md rounded-lg w-full overflow-hidden">
        <table className="border-collapse w-full">
          <thead className="bg-[#FFCCDB]">
            <tr className="text-[#1E1E1E]">
              {headers.map((header) => (
                <th
                  key={header}
                  className="py-3 px-4 text-center font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {tableData.map((data, i) => (
              <tr
                key={data.id}
                className="border-b border-[#E8E8E8] hover:bg-pink-50 text-center"
              >
                <td className="py-3 px-4 ">{i + 1}</td>
                <td className="py-3 px-4 ">{data.hospitalName}</td>
                <td className="py-3 px-4 ">{data.contactNo}</td>
                <td className="py-3 px-4 ">{data.totalStaff}</td>
                <td className="py-3 px-4 ">{data.totalPatient}</td>
                <td className="py-3 px-4 text-[#FF6760] ">
                  {data.highRiskPatient}
                </td>
                <td className="w-40 ">
                  <ToggleButton active={data.status} />
                </td>
                <td className="py-3 px-4 flex items-center gap-3">
                  <Image
                    src={Edit}
                    alt="edit"
                    className="inline cursor-pointer active:scale-90 transition-all"
                  />
                  <Image
                    src={Delete}
                    alt="delete"
                    className="inline cursor-pointer active:scale-90 transition-all"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* table Buttons for pagination */}
        <div className="flex justify-end p-4 ">
          {[
            <Image key="prev" src={Arrow} alt="prev" className="rotate-180" />,
            1,
            2,
            3,
            <Image key="next" src={Arrow} alt="next" />,
          ].map((item, i) => (
            <button
              key={i}
              className="px-3 py-1 mx-1 text-pink-600 bg-white border border-pink-300 rounded-md hover:bg-pink-200 active:bg-pink-300 transition-colors cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
