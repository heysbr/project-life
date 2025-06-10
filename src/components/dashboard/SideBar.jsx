import React from "react";
import Menu from "@/components/dashboard/svg/Menu.svg";
import Dashboard from "@/components/dashboard/svg/dashboard.svg";
import Hospitals from "@/components/dashboard/svg/all-hospitals.svg";
import Help from "@/components/dashboard/svg/help.svg";
import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="w-full flex flex-col gap-y-5 " >
      <Link href={"#"} className="border-b border-[#E8E8E8] flex w-full flex-row justify-between  items-center">
        <span className="p-5">Project Life </span>
          <Image src={Menu} alt="menu" className="m-5" />
      </Link>
     <Link href={"/dashboard"}  className=" w-full   pl-5">
        <Image src={Dashboard} alt="Dashboard" className="inline mx-3" />
        <span>Dashboard</span>
      </Link>
      <Link href={"/dashboard/all-hospitals"}  className="border-b border-[#E8E8E8] w-full pb-8  pl-5">
        <Image src={Hospitals} alt="Hospitals" className="inline mx-3" />
        <span>All Hospitals</span>
      </Link>
      <Link href={"/dashboard/help"}  className="w-full pl-5 ">
        <Image src={Help} alt="Help" className="inline mx-3" />
        <span>Help</span>
      </Link>
    </div>
  );
}
