"use client";
import Button from "@/components/common/Button";
import HospitalSearchField from "@/components/dashboard/HospitalSearchField";
import WardCard from "@/components/dashboard/WardCard";
import { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState("staff");

  return (
    <div className="flex flex-col mx-10 mt-15 h-fit ">
      <div className="flex flex-row gap-x-7 border-b-2 border-[#CFD2D7] pl-9">
        <div
          onClick={() => setActiveTab("staff")}
          className={`px-7 cursor-pointer rounded-t-lg py-2 h-full ${
            activeTab === "staff" ? "bg-[#FC5285] text-white" : "text-[#25282B]"
          }`}
        >
          Staff
        </div>
        <div
          onClick={() => setActiveTab("wards")}
          className={`px-7 cursor-pointer rounded-t-lg py-2 h-full ${
            activeTab === "wards" ? "bg-[#FC5285] text-white" : "text-[#25282B]"
          }`}
        >
          Wards
        </div>
      </div>
      <div className="mt-12">{activeTab==="staff" && <p>staff</p>}{activeTab==="wards" && <p>wards</p>}</div>
    </div>
  );
}

const CARDS_PER_PAGE = 6;

export function Component1({ data = [] }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.length / CARDS_PER_PAGE);
  const startIdx = (page - 1) * CARDS_PER_PAGE;
  const currentData = data.slice(startIdx, startIdx + CARDS_PER_PAGE);

  return (
    <>
      <h1 className="font-bold mb-8">Staff List</h1>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-x-5">
          <HospitalSearchField /> <SortByFilter />
        </div>
        <Button label="Add Staff" width="w-32" />
      </div>
      <div className="my-10 h-fit">
        <div className="grid grid-cols-3 gap-4">
          {currentData.map((staff, i) => (
            <StaffCard staff={staff} i={i} key={i} />
          ))}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-end mt-6 space-x-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1 rounded border border-[#E8E8E8] disabled:opacity-50"
            >
              ◀
            </button>

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

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1 rounded border border-[#E8E8E8] disabled:opacity-50"
            >
              
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export function Component2() {
  return (
    <>
      <h1 className="font-bold mb-8">Ward List</h1>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-x-5">
          <HospitalSearchField /> <SortByFilter />
        </div>
        <Button label="Add Ward" width="w-32" />
      </div>

      {/* Ward Cards */}
      <div className="my-10 h-fit">
        <div className="grid grid-cols-3 gap-6 w-full mb-10">
          {Array.from({ length: 9 }).map((_, i) => (
            <WardCard key={i} />
          ))}
        </div>
      </div>
    </>
  );
}

