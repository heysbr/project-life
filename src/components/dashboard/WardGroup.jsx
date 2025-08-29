"use client";
import WardCard from "@/components/dashboard/WardCard";
import HospitalSearchField from "@/components/dashboard/HospitalSearchField";
import SortByFilter from "@/components/dashboard/SortByFilter";
import Button from "@/components/common/Button";

import Link from "next/link";

export default function WardGroup() {
  return (
    <div className="flex flex-col mx-10 mt-15 h-fit ">
      <div className="flex flex-row gap-x-7 border-b-2 border-[#CFD2D7] pl-9">
        <div className=" px-7 rounded-t-lg py-2 h-full text-[#25282B] ">
          <Link href="/dashboard/all-hospitals/staff">Staff</Link>
        </div>
        <div className="bg-[#FC5285] px-7 outline-[#FC5285] outline-2 rounded-t-lg py-2 h-full text-[#FFFFFF] ">
          <Link href="/dashboard/all-hospitals/wards">Wards</Link>
        </div>
      </div>

      <h1 className="font-bold mt-12 mb-8"> Staff List</h1>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-x-5">
          <HospitalSearchField /> <SortByFilter />
        </div>
        <Button label="Add Staff" width="w-32" />
      </div>

      <div className="my-10 h-fit">
        <div className="grid grid-cols-3 gap-6 w-full mb-10 ">
          <WardCard />
          <WardCard />
          <WardCard />
          <WardCard />
          <WardCard />
          <WardCard />
          <WardCard />
          <WardCard />
          <WardCard />
        </div>
      </div>
    </div>
  );
}
