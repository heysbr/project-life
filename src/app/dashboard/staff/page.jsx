"use client";
import PageTitle from "@/components/common/PageTitle";

import { useState } from "react";
import Button from "@/components/common/Button";

import { EditStafffields as fields } from "@/data/fields";
import FormField from "@/components/common/FormField";
import FormUploadField from "@/components/common/formField/FormUploadField";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { generateSchema } from "@/components/common/SchemaGenerator";
import { da } from "zod/v4/locales";

const schema = generateSchema(fields); 

export default function page() {
  const {register, handleSubmit, formState: { errors } } = useForm({resolver: zodResolver(schema), mode: "all",});

  const onSubmit = (data) => {
    // alert("Form data: " + JSON.stringify(data, null, 2));
    console.table(data);
    setToggleEdit(false);
  };
 
  const [toggleEdit, setToggleEdit] = useState(false);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <PageTitle
        title={"Edit Staff"}
        btnLabel={`${toggleEdit ? "" : "Edit Profile"}`}
        onClick={setToggleEdit}
      />
      <fieldset disabled={!toggleEdit}>
        <div className="bg-white  grid rounded-md h-fit shadow-lg place-items-center">
          <div className="grid grid-cols-3 w-full gap-5 p-8 ">
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
          <div className="flex justify-between mt-5 gap-x-5">
            <FormUploadField />
            <div className="flex justify-end gap-x-5">
              <Button
                width="w-30"
                variant="secondary"
                label="Cancel"
                onClick={() => setToggleEdit(false)}
              />
              <Button width="w-30" label="Save" type="submit" />
            </div>
          </div>
        )}
      </fieldset>
    </form>
  );
}
