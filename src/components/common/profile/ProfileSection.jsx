"use client";
import Image from "next/image";
import { useState } from "react";
import Profile from "@/components/svg/photo.png";
import ProfileIcon from "@/components/svg/profile/profile-logo.svg";
import SettingsIcon from "@/components/svg/profile/profile-setting.svg";
import LogoutIcon from "@/components/svg/profile/profile-logout.svg";
import Link from "next/link";

export default function ProfileSection() {
  const [toggleProfile, setToggleProfile] = useState(false);
  return (
    <div
      className="relative mr-3 px-3 flex flex-row  cursor-pointer  active:scale-95 hover:bg-[#F5F5F5] transition-all "
      onClick={() => setToggleProfile(!toggleProfile)}
      onMouseLeave={() => setToggleProfile(false)}
    >
      <span className="my-auto mr-2 font-medium text-sm border-l pl-3 border-[#DFE0EB] ">
        Supreme Admin
      </span>
      <Image src={Profile} alt="profile" className="inline size-10 my-auto " />

      {toggleProfile && (
        <div className="absolute  z-10 w-36 top-full right-0 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-1">
            <Link href="/dashboard/profile">
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <Image src={ProfileIcon} alt="profile" className="inline me-2"/>
                Profile
              </li>
            </Link>
            <Link href={"/dashboard/profile/edit"}>
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <Image src={SettingsIcon} alt="profile" className="inline me-2"/>
                Settings
              </li>
            </Link>
            <Link href="/">
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <Image src={LogoutIcon} alt="profile" className="inline me-2"/>
                Logout
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}
