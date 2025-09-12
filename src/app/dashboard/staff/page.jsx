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

import { EditStafffields as fields } from "@/data/fields";
import FormField from "@/components/common/FormField";
import FormUploadField from "@/components/common/formField/FormUploadField";

export default function page() {
  const [toggleEdit, setToggleEdit] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <PageTitle
        title={"Edit Staff"}
        btnLabel={`${toggleEdit ? "" : "Edit Profile"}`}
        onClick={() => setToggleEdit(true)}
      />

      <div className="bg-white  grid rounded-md h-fit shadow-lg place-items-center">
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
      </div>
      {toggleEdit && (
        <div className="flex justify-between mt-5 gap-x-5">
          <FormUploadField />
          <div className="flex justify-end gap-x-5">
            <Button
              width="w-30"
              variant="secondary"
              label="Cancel"
              onClick={() => setToggleEdit(false)}
            />
            <Button
              width="w-30"
              label="Save"
              onClick={() => setToggleEdit(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
