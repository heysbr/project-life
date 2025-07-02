"use client";
import React, { useState } from "react";
import HospitalSearchField from "@/components/dashboard/HospitalSearchField";
import SortByFilter from "@/components/dashboard/SortByFilter";
import Button from "@/components/common/Button";

import Call from "@/components/svg/staff-list-call-button.svg";
import Menu from "@/components/svg/staff-card-menu.svg";
import Profile from "@/components/svg/staff-card-profile.svg";
import Image from "next/image";

const CARDS_PER_PAGE = 6;

export default function StaffCards({ data = [] }) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(data.length / CARDS_PER_PAGE);
  const startIdx = (page - 1) * CARDS_PER_PAGE;
  const currentData = data.slice(startIdx, startIdx + CARDS_PER_PAGE);

  return (
    <div className="flex flex-col mx-10 mt-15 h-fit ">
      <div className="flex flex-row gap-x-7 border-b-2 border-[#CFD2D7] pl-9">
        <div className="bg-[#FC5285] px-7 outline-[#FC5285] outline-2 rounded-t-lg py-2 h-full text-[#FFFFFF] ">
          Staff
        </div>
        <div className=" px-7 rounded-t-lg py-2 h-full text-[#25282B] ">
          Wards
        </div>
      </div>
      <h1 className="font-bold mt-12 mb-8"> Staff List</h1>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-x-5">
          <HospitalSearchField /> <SortByFilter />
        </div>
        <Button label="Add Staff" width="w-32" />
      </div>

      <div className="my-10 h-fit">
        <div className="mb-10 ">
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
                className="px-3 py-1 rounded border border-[#E8E8E8] disabled:opacity-50"
              >
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
              </button>

              {/* Numbers Button */}
              {Array.from({ length: totalPages }, (_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPage(idx + 1)}
                  className={`px-3 py-1 rounded ${
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
                className="px-3 py-1 rounded border border-[#E8E8E8] disabled:opacity-50 transition-all duration-300"
              >
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
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StaffCard({ staff, i }) {
  const [toggle, setToggle] = useState(false);
  const active = staff?.active ?? false;
  return (
    <div
      key={staff.id || i}
      className={`relative max-w-md rounded-2xl shadow-md bg-white overflow-hidden ${
        active ? "opacity-100" : "opacity-50"
      } transition-all duration-300 `}
    >
      {/* Card Head */}
      <div className="relative h-20 bg-pink-100 px-4 py-3 flex items-center justify-between">
        <Image src={Profile} alt="profile" />
        <div className="flex-1 mx-5">
          <h2 className="text-lg font-bold">{staff.name || "N/A"}</h2>
          <p className="text-sm text-gray-500">ID- {staff.id || "N/A"}</p>
          <Image
            src={Call}
            className="absolute right-3 bottom-2.5"
            alt="call"
          />
          <Image
            src={Menu}
            className="absolute right-3 top-2.5 cursor-pointer"
            onClick={() => setToggle(!toggle)}
            alt="menu"
          />

          {/* Edit Menu */}
          {toggle && (
            <div
              className="absolute flex list-disc list-inside w-1/2 top-9 right-2 text-sm bg-white shadow-lg rounded-md p-4 z-10 transition-all duration-500"
              onClick={() => setToggle(!toggle)}
            >
              <ul className="list-disc marker:text-[#FC5285] list-outside ml-5">
                <li className="p-1 rounded-md hover:bg-gray-100 cursor-pointer">
                  Edit Staff
                </li>
                <li className="p-1 rounded  hover:bg-gray-100 cursor-pointer">
                  Make an admin
                </li>
                <li className="p-1 rounded hover:bg-gray-100 cursor-pointer">
                  Remove from institution
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Card Body */}
      <table className="m-5">
        <tbody>
          <tr>
            <td className="h-8 w-3/7">Email</td>
            <td className="text-[#7D8491]">{staff.email || "N/A"}</td>
          </tr>
          <tr>
            <td className="h-8 w-3/7">Phone No.</td>
            <td className="text-[#7D8491]">{staff.phoneNo || "N/A"}</td>
          </tr>
          <tr>
            <td className="h-8 w-3/7">Profession</td>
            <td className="text-[#7D8491]">{staff.profession || "N/A"}</td>
          </tr>
          <tr>
            <td className="h-8 w-3/7">Total Patient</td>
            <td className="text-[#7D8491]">{staff.totalPatient ?? "N/A"}</td>
          </tr>
          <tr>
            <td className="h-8 w-3/7">Initials</td>
            <td className="text-[#7D8491]">{staff.initials || "N/A"}</td>
          </tr>
        </tbody>
      </table>

      <span
        className={`absolute bottom-3 font-semibold right-6 ${
          active ? "text-[#2DB23B]" : "text-[#ABAFB7]"
        }`}
      >
        &#8226;{active ? "  On Duty" : "  Off Duty"}
      </span>
    </div>
  );
}
