"use client";
import FormEmailField from "@/components/common/formField/FormEmailField";
import FormMobileField from "@/components/common/formField/FormMobileField";
import FormTextField from "@/components/common/formField/FormTextField";
import PageTitle from "@/components/common/PageTitle";
import Image from "next/image";

import profile from "@/components/images/profile.jpg";
import pencil from "@/components/svg/profile-edit.svg";
import { useState } from "react";
import Button from "@/components/common/Button";
import ButtonSecondary from "@/components/common/ButtonSecondary";

export default function page() {
  const [toggleEdit, setToggleEdit] = useState(false);
  return (
    <div className="p-10 h-screen">
      <PageTitle
        title={"Profile"}
        btnLabel={`${toggleEdit ? "" : "Edit Profile"}`}
        onClick={() => setToggleEdit(true)}
      />
      <div className="bg-white rounded-md h-fit pb-40 shadow-lg">
        <div className=" relative w-fit m-5 pt-5 ">
          <Image
            src={profile}
            alt="profile-pic"
            className=" rounded-full size-25  object-cover"
          />
          <Image
            src={pencil}
            alt="profile-pic"
            className="absolute   rounded-full bottom-1 right-1"
          />
        </div>
        <p className="px-7 py-4 font-bold">Genral Info</p>

        <div className="flex flex-row bg-white p-5 rounded-lg gap-x-10  justify-evenly">
          <FormTextField
            label="First Name"
            placeholder="Enter First Name"
            width="w-72"
          />
          <FormEmailField
            label="Email"
            placeholder="Enter Email"
            width="w-72"
          />
          <FormMobileField
            label="Phone Number"
            placeholder="Enter Phone Number"
            width="w-72"
          />
        </div>
      </div>
      {toggleEdit && (
        <div className="flex justify-end mt-5 gap-x-5">
          <ButtonSecondary
            label="Cancel"
            onClick={() => setToggleEdit(false)}
          />
          <Button label="Update" onClick={() => setToggleEdit(false)} />
        </div>
      )}
    </div>
  );
}
