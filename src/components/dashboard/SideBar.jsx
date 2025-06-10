import React from "react";
import Menu from "@/components/dashboard/svg/Menu.svg";
import Dashboard from "@/components/dashboard/svg/dashboard.svg";
import Hospitals from "@/components/dashboard/svg/all-hospitals.svg";
import Help from "@/components/dashboard/svg/help.svg";
import Image from "next/image";

export default function SideBar() {
  return (
    <div className="w-full flex flex-col gap-y-5 " >
      <div className="border-b border-[#E8E8E8] flex w-full flex-row justify-between  items-center">
        <p className="p-5">Project Life </p>
          <Image src={Menu} alt="menu" className="m-5" />
      </div>
     <div className=" w-full   pl-5">
        <Image src={Dashboard} alt="Dashboard" className="inline mx-3" />
        Dashboard
      </div>
      <div className="border-b border-[#E8E8E8] w-full pb-8  pl-5">
        <Image src={Hospitals} alt="Hospitals" className="inline mx-3" />
        All Hospitals
      </div>
      <div className="w-full pl-5">
        <Image src={Help} alt="Help" className="inline mx-3" />
        Help
      </div>
    </div>
  );
}
