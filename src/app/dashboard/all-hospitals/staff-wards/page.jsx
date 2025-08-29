"use client";
import StaffCards from "@/components/dashboard/StaffCards";
import Stats from "@/components/dashboard/Stats";
import { useState } from "react";

import { Staffdata } from "@/data/data";
import WardGroup from "@/components/dashboard/WardGroup";


export default function page() {
      const [activeTab, setActiveTab] = useState("staff");
  return (
    <div className="bg-white/80 ">
      <Stats />
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
      <div className="mt-12">{activeTab==="staff" && <StaffCards data={Staffdata} />}{activeTab==="wards" && <WardGroup/>}</div>
    </div>
    </div>
  );
}
