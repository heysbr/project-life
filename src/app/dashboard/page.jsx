import HospitalList from "@/components/dashboard/HospitalList";
import Search from "@/components/dashboard/Search";
import Stats from "@/components/dashboard/Stats";
import React from "react";

export default function page() {
  return (
    <div className="flex-1 ">
      <Search/>
      <div className="bg-white/80 ">
      <Stats/>
      <HospitalList/>
      </div>
      </div>
  );
}