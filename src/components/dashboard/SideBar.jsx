"use client"
import React, { useState } from "react";
import Menu from "@/components/dashboard/svg/Menu.svg";
import MenuToggle from "@/components/dashboard/svg/menu-toggle.svg";
import Dashboard from "@/components/dashboard/svg/dashboard.svg";
import Hospitals from "@/components/dashboard/svg/all-hospitals.svg";
import Help from "@/components/dashboard/svg/help.svg";
import Image from "next/image";
import Link from "next/link";

export default function SideBar() {

  const [toggle, setToggle] = useState(true)
  return (<>
    {/* <aside className="w-full flex flex-col gap-y-5 " >
      <div className="border-b border-[#E8E8E8] flex w-full flex-row justify-between  items-center">
        <Link href={"/login"} className="p-5">Project Life </Link>
          <Image src={Menu} alt="menu" className="m-5" />
      </div>
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
    </aside> */}


      
<aside className={toggle? "w-64 flex flex-col gap-y-5 transition-all" :"w-fit flex flex-col gap-y-5 transition-all"} >
      <div className="outline outline-[#E8E8E8]  border-[#E8E8E8] flex w-full flex-row justify-between  items-center h-17">
        {toggle&&<Link href={"/login"} className="p-5"><span>Project Life</span> </Link>}
          <Image src={toggle?Menu:MenuToggle} alt="menu" className="m-6"  onClick={()=>setToggle(!toggle)}/>
      </div>
     <Link href={"/dashboard"}  className=" w-full   pl-5">
        <Image src={Dashboard} alt="Dashboard" className="inline mx-3 hover:" />
        {toggle&&<span>Dashboard</span>}
      </Link>
      <Link href={"/dashboard/all-hospitals"}  className="border-b border-[#E8E8E8] w-full pb-8  pl-5">
        <Image src={Hospitals} alt="Hospitals" className="inline mx-3" />
        {toggle&&<span>All Hospitals</span>}
      </Link>
      <Link href={"/dashboard/help"}  className="w-full pl-5 ">
        <Image src={Help} alt="Help" className="inline mx-3" />
        {toggle&&<span>Help</span>}
      </Link>
    </aside>

  </>
  );
}
