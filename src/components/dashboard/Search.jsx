
import React from "react";
import SearchInput from "./Dropdown";
import Bell from "@/components/dashboard/svg/Bell.svg";
import Image from "next/image";
import Profile from "@/components/dashboard/svg/photo.png";

 const hospitals = [
    "All Hospitals",
    "Apollo Hospital",
    "FemCare OBS/GYN Clinic",
    "Artemis Hospital",
    "Medanta -The Medicity",
    "Ease Care Clinic",
  ];

export default function Search() {
  return (
    <div className="flex flex-row justify-between bg-[#FFFFFF] h-17  ">
      <div className="flex flex-row gap-x-4 my-auto">
        <span className="ml-10 my-auto font-medium  ">Search Hospitals</span>
        <SearchInput name={"State"} data={hospitals}/>
        <SearchInput name={"District"} data={hospitals}/>
        <SearchInput name={"Hospitals"} data={hospitals}/>
        <Image src={Bell} alt="bell cursor pointer" />
      </div>
      <div className=" mr-3 px-3 flex flex-row ">
        <span className="my-auto mr-2 font-medium text-sm border-l pl-3 border-[#DFE0EB]">Supreme Admin</span>
        <Image src={Profile} alt="profile" className="inline size-10 my-auto" />
      </div>
    </div>
  );
}
