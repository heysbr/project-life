"use client";
import Image from "next/image";
import React, { useState } from "react";
import Profile from "@/components/dashboard/svg/photo.png";

export default function ProfileSection() {
    const [toggleProfile, setToggleProfile] = useState(false);
  return (
    <div className="relative mr-3 px-3 flex flex-row  cursor-pointer  active:scale-95 hover:bg-[#F5F5F5] transition-all " onClick={() => setToggleProfile(!toggleProfile)} onMouseLeave={() => setToggleProfile(false)}>
      <span className="my-auto mr-2 font-medium text-sm border-l pl-3 border-[#DFE0EB] ">
        Supreme Admin
      </span>
      <Image src={Profile} alt="profile" className="inline size-10 my-auto " />

        {toggleProfile && (
          <div className="absolute  z-10 w-36 top-full right-0 bg-white border border-gray-200 rounded-md shadow-lg">
            <ul className="py-1">
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</li>
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</li>
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</li>
            </ul>
          </div>
        )}
    </div>
  );
}
