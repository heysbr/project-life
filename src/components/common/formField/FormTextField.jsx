import React from "react";
import eye from "@/components/images/pass-eye.svg";
import Image from "next/image";
const FormTextField = (props) => {
    console.log("props-formtextfield", props);
  return (
    <>
      <div className="relative ">
        <label className="text-sm font-medium text-gray-700 mb-2">
          {props?.label}
        </label>
        <input
          type={props?.pass ? "password" : "text"}
          id={props?.name}
          name={props?.name}
          placeholder={props?.placeholder}
          className="w-full px-4 py-2  border border-gray-300 rounded-md   placeholder-[#BEC5D3] text-sm focus:outline-0"
          required
        />
        <Image
          src={eye}
          alt="eye"
          className="absolute top-1/2 translate-y-1/2 right-3 "
        />
      </div>
    </>
  );
};

export default FormTextField;
