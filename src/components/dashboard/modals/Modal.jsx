"use client";
import Image from "next/image";
import addInstituteCrossBtn from "@/components/svg/addInstituteCrossBtn.svg";
import Heading from "@/components/common/layouts/Heading";

export default function Modal({ closeModal, heading, children }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 bg-opacity-50 z-40 flex items-center justify-center">
      <div className="bg-[#FFFFFF] flex flex-col py-10 gap-y-10 shadow-2xl fixed top-1/2 left-1/2 -translate-1/2 z-50 w-1/3  items-center rounded-md">
        <Image
          src={addInstituteCrossBtn}
          alt="close"
          className="cursor-pointer absolute right-2 top-2"
          onClick={() => closeModal()}
        />
        <h1 className="font-semibold text-2xl ">{heading}</h1>
        <div className="w-full px-10">{children}</div>
        {/* <div className="flex flex-1 flex-col gap-y-7">{children}</div> */}
      </div>
    </div>
  );
}
