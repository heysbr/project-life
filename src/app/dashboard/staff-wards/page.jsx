"use client";
import StaffCards from "@/components/dashboard/StaffCards";
import Stats from "@/components/dashboard/Stats";
import { useState } from "react";
import { Staffdata } from "@/data/data";
import WardCards from "@/components/dashboard/WardCards";
import { WardsData } from "@/data/data";
import StaffWardTab from "@/components/dashboard/cards/StaffWardTab";

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
