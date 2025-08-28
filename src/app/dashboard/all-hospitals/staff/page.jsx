import Search from "@/components/dashboard/Search";
import Stats from "@/components/dashboard/Stats";
import SideBar from "@/components/dashboard/SideBar";
import React from "react";
import StaffCards from "@/components/dashboard/StaffCards";

import { Staffdata } from "@/data/data";

export default function page() {
  return (
    <div className="flex-1 ">
      <Search />
      <div className="bg-white/80 ">
        <Stats />
        <StaffCards data={Staffdata} />
      </div>
    </div>
  );
}
