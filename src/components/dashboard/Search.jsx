import React from "react";
import Dropdown from "./Dropdown";
import Bell from "@/components/svg/Bell.svg";
import Image from "next/image";
import ProfileSection from "../common/profile/ProfileSection";

import { HospitalsListData } from "@/data/data";
import { StatesListData } from "@/data/data";
import { DistrictsList } from "@/data/data";

export default function Search() {
  return (
    <div className="flex flex-row justify-between bg-[#FFFFFF] h-17 ">
      <div className="flex flex-row gap-x-4 my-auto">
        <span className="ml-10 my-auto font-medium  ">Search Hospitals</span>
        <Dropdown name={"State"} data={StatesListData} />
        <Dropdown name={"District"} data={DistrictsList} />
        <Dropdown name={"Hospitals"} data={HospitalsListData} />
        <Image
          width={"auto"}
          height={"auto"}
          src={Bell}
          alt="bell"
          className="cursor-pointer active:scale-90 transition-all"
        />
      </div>
      <ProfileSection />
    </div>
  );
}
