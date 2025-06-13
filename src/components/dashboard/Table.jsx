"use client";
import Image from "next/image";
import React from "react";
import Delete from "@/components/dashboard/svg/delete.svg";
import Edit from "@/components/dashboard/svg/edit.svg";
import Arrow from "@/components/dashboard/svg/Arrow.svg";

import { useState } from "react";

const tableData = [
  {
    id: 1,
    hospitalName: "Apollo Hospital",
    contactNo: "9555508100",
    totalStaff: 25,
    totalPatient: 45,
    highRiskPatient: 12,
    status: "Active",
  },
  {
    id: 2,
    hospitalName: "Ease Care Clinic",
    contactNo: "8655508122",
    totalStaff: 15,
    totalPatient: 38,
    highRiskPatient: 5,
    status: "Inactive",
  },
  {
    id: 3,
    hospitalName: "FemCare OBS/GYN Clinic",
    contactNo: "9855508109",
    totalStaff: 20,
    totalPatient: 32,
    highRiskPatient: 8,
    status: "Active",
  },
  {
    id: 4,
    hospitalName: "Artemis Hospital",
    contactNo: "8655508122",
    totalStaff: 18,
    totalPatient: 20,
    highRiskPatient: 3,
    status: "Active",
  },
  {
    id: 5,
    hospitalName: "Medanta - The Medicity",
    contactNo: "9855508109",
    totalStaff: 15,
    totalPatient: 48,
    highRiskPatient: 15,
    status: "Active",
  },
];

const ToggleButton = ({ active }) => {
  const [isActive, setIsActive] = useState(active === "Active");
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-12 h-6 flex items-center bg-transparent border-2 rounded-full p-1 cursor-pointer ${
          isActive ? "border-green-500" : "border-gray-500"
        }`}
        onClick={() => setIsActive((v) => !v)}
      >
        <div
          className={`w-4 h-4 rounded-full transition-transform duration-300 ${
            isActive ? "bg-green-500 translate-x-5" : "bg-gray-500 translate-x-0"
          }`}
        />
      </div>
      <span>{isActive ? "Active" : "Inactive"}</span>
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

const Table = () => (
  <div className="flex items-center w-full pb-10">
    <div className="bg-white shadow-md rounded-lg w-full overflow-hidden">
      <table className="border-collapse w-full">
        <thead className="bg-[#FFCCDB]">
          <tr className="text-[#1E1E1E]">
            {headers.map((header) => (
              <th key={header} className="py-3 px-4 text-left font-medium">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {tableData.map((data, idx) => (
            <tr key={data.id} className="border-b hover:bg-pink-50">
              <td className="py-3 px-4">{idx + 1}</td>
              <td className="py-3 px-4">{data.hospitalName}</td>
              <td className="py-3 px-4">{data.contactNo}</td>
              <td className="py-3 px-4">{data.totalStaff}</td>
              <td className="py-3 px-4">{data.totalPatient}</td>
              <td className="py-3 px-4 text-red-500 font-bold">
                {data.highRiskPatient}
              </td>
              <td className="py-3 px-4">
                <ToggleButton active={data.status} />
              </td>
              <td className="py-3 px-4 flex items-center gap-3">
                <Image src={Edit} alt="edit" className="inline" />
                <Image src={Delete} alt="delete" className="inline" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end p-4">
        {[
          <Image key="prev" src={Arrow} alt="prev" className="rotate-180" />,
          1,
          2,
          3,
          <Image key="next" src={Arrow} alt="next" />,
        ].map((item, idx) => (
          <button
            key={idx}
            className="px-3 py-1 mx-1 text-pink-600 bg-white border border-pink-300 rounded-md hover:bg-pink-200"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default Table;
