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
    <div className="flex flex-col gap-4">
      <PageTitle
        title={"Edit Staff"}
        btnLabel={`${toggleEdit ? "" : "Edit Profile"}`}
        onClick={() => setToggleEdit(true)}
      />
      <div className="bg-white flex flex-col p-10 gap-y-5 rounded-md h-fit shadow-lg">
        <div className=" relative w-fit">
          <Image
            src={profile}
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

        <div className="flex flex-row bg-white rounded-lg gap-5 items-center me-4 ">
          <FormTextField label="First Name" placeholder="Enter First Name" />
          <FormEmailField label="Email" placeholder="Enter Email" />
          <FormMobileField
            label="Phone Number"
            placeholder="Enter Phone Number"
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
