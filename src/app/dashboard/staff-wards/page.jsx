"use client";
import StaffCards from "@/components/dashboard/staff/StaffCards";
import Stats from "@/components/dashboard/stats/Stats";
import { useState } from "react";
import { Staffdata } from "@/data/data";
import { WardsData } from "@/data/data";
import StaffWardTab from "@/components/dashboard/cards/StaffWardTab";
import WardCards from "@/components/dashboard/wards/WardCards";

export default function page() {
  const [activeTab, setActiveTab] = useState("staff");

  return (
    <>
      <Stats />
      <div className="flex flex-col h-fit gap-y-5 pt-10">
        <StaffWardTab setActiveTab={setActiveTab} activeTab={activeTab} />
        {activeTab === "staff" && <StaffCards data={Staffdata} />}
        {activeTab === "wards" && <WardCards data={WardsData} />}
      </div>
    </>
  );
}
