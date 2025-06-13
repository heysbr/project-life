
import React from "react";
import Dropdown from "./Dropdown";
import Bell from "@/components/dashboard/svg/Bell.svg";
import Image from "next/image";
import Profile from "@/components/dashboard/svg/photo.png";
import ProfileSection from "../common/profile/ProfileSection";

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
        <Dropdown name={"State"} data={hospitals}/>
        <Dropdown name={"District"} data={hospitals}/>
        <Dropdown name={"Hospitals"} data={hospitals}/>
        <Image src={Bell} alt="bell" className="cursor-pointer active:scale-90 transition-all"/>
      </div>
      <ProfileSection />
    </div>
  );
}
