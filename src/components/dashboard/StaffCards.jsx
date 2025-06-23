import React from "react";

import Call from "@/components/svg/staff-list-call-button.svg";
import Menu from "@/components/svg/staff-card-menu.svg";
import Profile from "@/components/svg/staff-card-profile.svg";
import Image from "next/image";

export default function StaffCards({ data }) {
  const active = false; // This should be replaced with actual logic to determine if the staff is active or not
  return (
    <>
      <div className="grid grid-cols-3 gap-4 ">
        <div className=" relative max-w-md rounded-2xl shadow-md bg-white overflow-hidden">
          <div className="relative h-20 bg-pink-100 px-4 py-3 flex items-center justify-between">
            <Image src={Profile} alt="profile"/>
            <div className="flex-1 mx-5">
              <h2 className="text-lg font-bold">Dr. Christino Murphy</h2>
              <p className="text-sm text-gray-500">ID- PL0020</p>
              <Image src={Call} className="absolute right-3 bottom-2.5" alt="call"/>
              <Image src={Menu} className="absolute right-3 top-2.5" alt="call"/>
            </div>
          </div>

          <table className="m-5 ">
            <tbody>
              <tr><td className="w-1/2">Email</td><td className="text-[#7D8491]">christino@gmail.com</td></tr>
              <tr><td className="w-1/2">Phone No.</td><td className="text-[#7D8491]">(425) 785-2128</td></tr>
              <tr><td className="w-1/2">Profession</td><td className="text-[#7D8491]">Doctor</td></tr>
              <tr><td className="w-1/2">Total Patient</td><td className="text-[#7D8491]">10</td></tr>
              <tr><td className="w-1/2">Initials</td><td className="text-[#7D8491]">CM</td></tr>
            </tbody>
          </table>
          <span className={`absolute bottom-3 font-semibold right-6 ${active?"text-[#2DB23B]":"text-[#ABAFB7]"}`}>&#8226;{active?"  On Duty":"  Off Duty"}</span>
        </div>
      </div>
    </>
  );
}
