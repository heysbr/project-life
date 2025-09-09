"use client";
import PageTitle from "@/components/common/PageTitle";
import Image from "next/image";

import HospitalIcon from "@/components/svg/hospital-photo.svg"
import pencil from "@/components/svg/profile-edit.svg";
import { useState } from "react";
import Button from "@/components/common/Button";

import {EditHospitalFields as fields} from "@/data/fields";
import FormField from "@/components/common/FormField";

const additionalFields = [{
    name: "address",
    type: "textarea",
    placeholder: "Enter address",
    label: "Address",
  },
  {
    name: "aboutHospital",
    type: "textarea",
    placeholder: "Enter about hospital",
    label: "About Hospital",
  },]

export default function page() {
  const [toggleEdit, setToggleEdit] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <PageTitle title={"Edit Hospital"} btnLabel={`${toggleEdit ? "" : "Edit Profile"}`}onClick={() => setToggleEdit(true)}/>
      <div className="bg-white flex flex-col p-10 gap-y-5 rounded-md h-fit shadow-lg">

        <div className=" relative w-fit">
          <Image
            src={HospitalIcon}
            alt="profile-pic"
            className=" rounded-full size-25  object-cover"
          />
          <Image
            src={pencil}
            alt="profile-pic"
            className="absolute rounded-full bottom-1 right-1"
          />
        </div>

        <p className="font-bold">Genral Info</p>

        

        <div className="grid grid-cols-3 w-full gap-5 p-8 ">
          {fields.map((field, index) => (
            <FormField
              key={index}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              label={field.label}
              values={field?.options}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 w-full gap-5 pt-0 p-8 ">
          {additionalFields.map((field, index) => (
            <FormField
              key={index}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              label={field.label}
              values={field?.options}
            />
          ))}</div>

        

      </div>
      
      {toggleEdit && (
        <div className="flex justify-end mt-5 gap-x-5">
          <Button variant="secondary"
            label="Cancel"
            onClick={() => setToggleEdit(false)}
          />
          <Button label="Update" onClick={() => setToggleEdit(false)} />
        </div>
      )}
    </div>
  );
}
