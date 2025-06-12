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

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  const background = isActive ? "border-green-500" : "border-gray-500";

  const toggleClass = isActive
    ? "bg-green-500 translate-x-5"
    : "bg-gray-500 translate-x-0";

  return (
    <>
      <div
        className={`w-12 h-6 flex items-center  bg-transparent ${background} border-2 rounded-full p-1 cursor-pointer`}
        onClick={() => setIsActive(!isActive)}
      >
        <div
          className={`w-4 h-4 rounded-full transition-transform duration-300 ${toggleClass}`}
        ></div>
      </div>
      {isActive ? <p>Active</p> : <p>Inactive</p>}
    </>
  );
};

export default function Table() {
  return (
    <div className="flex items-center  w-full  pb-10 ">
      <div className=" bg-white shadow-md rounded-lg w-full overflow-hidden">
        <table className="border-collapse w-full">
          <thead className="w-full bg-[#FFCCDB]">
            <tr className="text-[#1E1E1E]">
              <th className="py-3 px-4 text-left font-medium ">S. No.</th>
              <th className="py-3 px-4 text-left font-medium ">
                Hospital Name
              </th>
              <th className="py-3 px-4 text-left font-medium ">Contact No.</th>
              <th className="py-3 px-4 text-left font-medium ">Total Staff</th>
              <th className="py-3 px-4 text-left font-medium ">
                Total Patient
              </th>
              <th className="py-3 px-4 text-left font-medium ">
                High Risk Patient
              </th>
              <th className="py-3 px-4 text-left font-medium ">Status</th>
              <th className="py-3 px-4 text-left font-medium  ">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {tableData.map((data, index) => (
              <tr key={data.id} className="border-b hover:bg-pink-50">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{data.hospitalName}</td>
                <td className="py-3 px-4">{data.contactNo}</td>
                <td className="py-3 px-4">{data.totalStaff} </td>
                <td className="py-3 px-4">{data.totalPatient} </td>
                <td className="py-3 px-4 text-red-500 font-bold">
                  {data.highRiskPatient}
                </td>
                <td className="py-3 px-4 items-center">
                  <ToggleButton />
                </td>
                <td className="py-3 px-4">
                  <Image src={Edit} alt="edit" className="inline" />
                  <Image src={Delete} alt="delete" className="inline" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end p-4 ">
          <button className="px-3 py-1 mx-1 text-pink-600 bg-white border border-pink-300 rounded-md hover:bg-pink-200">
            <Image src={Arrow} alt="arrow" className="rotate-180" />
          </button>
          <button className="px-3 py-1 mx-1 text-pink-600 bg-white border border-pink-300 rounded-md hover:bg-pink-200">
            1
          </button>
          <button className="px-3 py-1 mx-1 text-pink-600 bg-white border border-pink-300 rounded-md hover:bg-pink-200">
            2
          </button>
          <button className="px-3 py-1 mx-1 text-pink-600 bg-white border border-pink-300 rounded-md hover:bg-pink-200">
            3
          </button>
          <button className="px-3 py-1 mx-1 text-pink-600 bg-white border border-pink-300 rounded-md hover:bg-pink-200">
            <Image src={Arrow} alt="arrow" className="" />
          </button>
        </div>
      </div>
    </div>
  );
}
