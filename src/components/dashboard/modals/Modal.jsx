"use client";
import Image from "next/image";
import addInstituteCrossBtn from "@/components/svg/addInstituteCrossBtn.svg";
import Heading from "@/components/common/layouts/Heading";

export default function Modal({ closeModal, heading, children }) {
  return (
    <div className="bg-[#FFFFFF] flex flex-col py-10 gap-y-10 shadow-2xl fixed top-1/2 left-1/2 -translate-1/2 z-50 w-1/3  items-center rounded-md">
      <Image src={addInstituteCrossBtn} alt="close"
        className="cursor-pointer absolute right-2 top-2"
        onClick={() => closeModal()}
      />
      <h1 className="font-semibold text-2xl ">{heading}</h1>
      <div className="">{children}</div>
      {/* <div className="flex flex-1 flex-col gap-y-7">{children}</div> */}
    </div>
  );
}
