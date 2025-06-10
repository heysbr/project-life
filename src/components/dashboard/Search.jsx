import React from "react";
import SearchInput from "./SearchInput";
import Bell from "@/components/dashboard/Bell.svg";
import Image from "next/image";
import Profile from "@/components/dashboard/photo.png";

export default function Search() {
  return (
    <div className="flex flex-row justify-between bg-[#FFFFFF] h-16  ">
      <div className="flex flex-row gap-x-4 my-auto">
        <span className="ml-20 my-auto font-medium ">Search Hospitals</span>
        <SearchInput name={"State"} />
        <SearchInput name={"District"} />
        <SearchInput name={"Hospitals"} />
        <Image src={Bell} alt="bell" />
      </div>
      <div className="border-l mr-3 px-3 flex flex-row ">
        <span className="my-auto mr-2 font-medium text-sm">Supreme Admin</span>
        <Image src={Profile} alt="profile" className="inline" />
      </div>
    </div>
  );
}
