"use client";
import Image from "next/image";
import addInstituteCrossBtn from "@/components/svg/addInstituteCrossBtn.svg";
import Button from "@/components/common/Button";
import ButtonSecondary from "@/components/common/ButtonSecondary";

export default function Modal({
  closeModal,
  primaryBtnText,
  secondaryBtnText,
  heading,
  children,
}) {
  return (
    <div className="bg-[#FFFFFF]  shadow-2xl px-10 fixed top-1/2 left-1/2 -translate-1/2  z-50 w-1/3 flex items-center  flex-col rounded-md">
      <Image
        src={addInstituteCrossBtn}
        alt="close"
        className="cursor-pointer absolute right-2 top-2"
        onClick={() => closeModal()}
      />
      <h1 className="font-bold text-2xl my-5">{heading}</h1>
      {children}
      <div className=" flex gap-x-9 my-10">
        {secondaryBtnText && <ButtonSecondary label={secondaryBtnText} o />}
        {primaryBtnText && <Button label={primaryBtnText} />}
      </div>
    </div>
  );
}
