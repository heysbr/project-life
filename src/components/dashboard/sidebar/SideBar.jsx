"use client";
import { useState } from "react";
import Menu from "@/components/svg/Menu.svg";
import MenuToggle from "@/components/svg/menu-toggle.svg";

import Image from "next/image";
import Link from "next/link";

import { SideBarLinks } from "@/data/data";

export default function SideBar() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("/dashboard");

  return (
    <aside
      className={`flex flex-col gap-y-5 bg-white transition-all duration-300 ${
        open ? "w-56" : "w-16"
      }`}
    >
      <div
        className={`outline outline-[#E8E8E8] flex items-center justify-between h-17 relative 
        ${open ? "" : "justify-center"}`}
      >
        {open && (
          <Link href="/login" className="p-5">
            <span>Project Life</span>{" "}
          </Link>
        )}
        <div>
          <Image
            src={open ? Menu : MenuToggle}
            alt="menu"
            className={`${
              open ? "m-6" : "mx-auto"
            } cursor-pointer active:scale-95`}
            onClick={() => setOpen((v) => !v)}
          />
        </div>
      </div>
      {SideBarLinks.map(({ href, icon, label, activeIcon }) => (
        <Link
          key={href}
          href={href}
          className={`${
            open ? "pl-5" : "justify-center"
          } flex items-center gap-3 w-full active:scale-98 ${
            href === "/dashboard/all-hospitals"
              ? "border-b border-[#E8E8E8] pb-8"
              : ""
          }`}
          onClick={() => setActive(href)}
        >
          <Image
            src={active === href ? activeIcon : icon}
            alt={label}
            className="inline"
          />

          {open && (
            <span
              className={`${
                active === href ? "text-[#FC5285]" : "text-[#52575C]"
              } font-semibold`}
            >
              {label}
            </span>
          )}
        </Link>
      ))}
    </aside>
  );
}
