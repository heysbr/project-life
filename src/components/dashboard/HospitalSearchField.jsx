"use client"
import React, { useState } from "react";
import Image from "next/image";
import searchImg from "@/components/svg/search.svg";
import Button from "../common/Button";
import AddInstitute from "../../Pages/Institute/AddInstitute";

export default function HospitalSearchField() {
  const [addHospitalModal, setAddHospitalModal] = useState(false);
  return (
    <div className="flex justify-between items-center mb-5">
      <div className="flex items-center bg-white rounded-4xl px-3 py-1 w-72 h-9 shadow-md  ">
        <Image src={searchImg} alt="search" />
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search"
          className="ml-2 placeholder-[#BEC5D3] text-sm text-[#A0A4A8] focus:outline-none"
        />
      </div>
      <Button label="Add Hospital"  onClick={()=>setAddHospitalModal(true)} />
      {addHospitalModal && <AddInstitute closeModal={setAddHospitalModal} />}
    </div>
  );
}
