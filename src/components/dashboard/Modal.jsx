import Image from "next/image";
import addInstituteCrossBtn from "@/components/svg/addInstituteCrossBtn.svg";

import FormTextField from "@/common/formField/FormTextField";
import FormTextField from "@/components/common/formField/FormTextField";
import Button from "@/components/common/Button";
import ButtonSecondary from "@/components/common/ButtonSecondary";

export default function Modal({ closeModal, label, placeholder }) {
  return (
    <div className="bg-[#FFFFFF]  shadow-2xl  absolute top-1/2 left-1/2 -translate-1/2  z-50 h-1/3  w-1/3 flex items-center  flex-col rounded-md  shadow-2xlp-10">
      <Image
        src={addInstituteCrossBtn}
        alt="close"
        className="cursor-pointer absolute right-2 top-2"
        onClick={() => closeModal()}
      />
      <h1 className="font-bold text-2xl my-5">Rename Ward</h1>
      <FormTextField placeholder={placeholder} label={label} />

      <div className=" flex gap-x-9 my-10">
        <ButtonSecondary label={"Cancel"} />
        <Button label={"Update"} />
      </div>
    </div>
  );
}
