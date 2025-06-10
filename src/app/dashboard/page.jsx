import HospitalList from "@/components/dashboard/HospitalList";
import Search from "@/components/dashboard/Search";
import SideBar from "@/components/dashboard/SideBar";
import Stats from "@/components/dashboard/Stats";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-row w-full bg-[#E8E8E8] h-screen">
      <div className="flex flex-col bg-[#FFFFFF] w-fit px-20">
        <SideBar />
      </div>
      <div className="flex-1 ">
        <Search/>
        <Stats/>
        <HospitalList/>
      </div>
    </div>
  );
}
