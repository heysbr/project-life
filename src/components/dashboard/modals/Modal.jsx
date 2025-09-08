"use client";
import Image from "next/image";
import addInstituteCrossBtn from "@/components/svg/addInstituteCrossBtn.svg";

export default function Modal({ closeModal, heading, children }) {
  return (
    <div className="bg-[#FFFFFF]  shadow-2xl p-10 px-15 fixed  top-1/2 left-1/2 -translate-1/2  z-50 w-1/3 flex items-center  flex-col rounded-md">
      <Image src={addInstituteCrossBtn} alt="close"
        className="cursor-pointer absolute right-2 top-2"
        onClick={() => closeModal()}
      />
      <h1 className="font-bold text-2xl my-5">{heading}</h1>
      <div className="flex flex-col gap-y-5 my-5">{children}</div>
    </div>
  );
}
