"use client";
import PageTitle from "@/components/common/PageTitle";
import Image from "next/image";

import profile from "@/components/images/profile.jpg";
import pencil from "@/components/svg/profile-edit.svg";
import { useState } from "react";
import Button from "@/components/common/Button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { generateSchema } from "@/components/common/SchemaGenerator";
import { profileFormFields as fields } from "@/data/fields";
import FormField from "@/components/common/FormField";

const schema = generateSchema(fields);

export default function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const onSubmit = (data) => {
    alert("Form data: " + JSON.stringify(data, null, 2));
    setToggleEdit(false);
  };
  const [toggleEdit, setToggleEdit] = useState(false);
  return (
    <form className="flex flex-col gap-4 h-1/2">
      <PageTitle
        title={"Profile"}
        btnLabel={`${toggleEdit ? "" : "Edit Profile"}`}
        onClick={() => setToggleEdit(true)}
      />
      <fieldset disabled={!toggleEdit}>
        <div className="bg-white flex flex-col p-10 gap-y-5 rounded-md h-96 shadow-lg">
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

          <div className="grid-cols-3 grid gap-x-6  ">
            {fields.map((field, index) => (
              <FormField
                key={index}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                label={field.label}
                options={field?.options}
                register={register}
                error={errors[field.name]?.message}
              />
            ))}
          </div>
        </div>

        {toggleEdit && (
          <div className="flex justify-end mt-5 gap-x-5">
            <Button
              variant="secondary"
              label="Cancel"
              onClick={() => setToggleEdit(false)}
            />
            <Button label="Update" onClick={() => setToggleEdit(false)} />
          </div>
        )}
      </fieldset>
    </form>
  );
}
