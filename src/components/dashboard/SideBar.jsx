"use client";
import React, { useState } from "react";
import Menu from "@/components/dashboard/svg/Menu.svg";
import MenuToggle from "@/components/dashboard/svg/menu-toggle.svg";
import Dashboard from "@/components/dashboard/svg/dashboard.svg";
import Hospitals from "@/components/dashboard/svg/all-hospitals.svg";
import Help from "@/components/dashboard/svg/help.svg";
import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/dashboard", icon: Dashboard, label: "Dashboard" },
    { href: "/dashboard/all-hospitals", icon: Hospitals, label: "All Hospitals" },
    { href: "/dashboard/help", icon: Help, label: "Help" },
  ];

  return (
    <aside className={`flex flex-col gap-y-5 bg-white transition-all duration-300 ${open ? "w-64" : "w-16"}`} >
      <div className={`outline outline-[#E8E8E8] flex items-center justify-between h-17 relative 
        ${open ? "" : "justify-center"}`}>
        {open && ( <Link href="/login" className="p-5"> <span>Project Life</span> </Link> )}
        <div className={open? "": ""}>
          <Image
            src={open ? Menu : MenuToggle}
            alt="menu"
            className={`${open?"m-6":"mx-auto"} cursor-pointer active:scale-95`}
            onClick={() => setOpen((v) => !v)}
          />
        </div>
      </div>
      {links.map(({ href, icon, label }) => (
        <Link
          key={href}
          href={href}
          className={`pl-5 flex items-center gap-3 w-full active:scale-98 ${
            href === "/dashboard/all-hospitals" ? "border-b border-[#E8E8E8] pb-8" : ""
          }`}
        >
          <Image src={icon} alt={label} className="inline" />
          {open && <span>{label}</span>}
        </Link>
      ))}
    </aside>
  );
}
