import Button from "@/components/common/Button";
import FormField from "@/components/common/FormField";
import Image from "next/image";
import defaultProfile from "@/components/svg/defaultProfile.svg";
import addInstituteCrossBtn from "@/components/svg/addInstituteCrossBtn.svg";

import { AddInstituteFields as fields } from "@/data/fields";

export default function AddInstitute({ closeModal }) {
  return (
    <div className="bg-[#FFFFFF]  shadow-2xl  absolute top-1/2 left-1/2 -translate-1/2  z-50 h-4/5  w-4/5 flex items-center  flex-col rounded-md  shadow-2xlp-10">
      <Image
        src={addInstituteCrossBtn}
        alt="close"
        className="cursor-pointer absolute right-2 top-2"
        onClick={() => closeModal()}
      />

      <h1 className="font-bold text-2xl m-10">Add Institute</h1>

      <Image src={defaultProfile} alt="profile" />

      <div className="mt-2">
        <input
          id="fileUpload"
          type="file"
          className="hidden"
          accept="image/*"
        />
        <label
          htmlFor="fileUpload"
          className="cursor-pointer rounded-2xl bg-[#FC5285] px-3 py-0.5 text-white text-xs hover:opacity-85"
        >
          Add Photo
        </label>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-x-10 m-4  gap-y-5 justify-center">
        {fields.map((field, index) => (
          <FormField
            key={index}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            label={field.label}
          />
        ))}
      </div>

      <Button label={"Add Institute"} width={"w-68"} onClick={()=>closeModal()} />
    </div>
  );
}
