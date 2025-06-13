import React from "react";

import Button from "@/components/Forms/Button";
import Forget from "@/components/Forms/Forget";
import Heading from "@/components/layouts/Heading";
import FormField from "@/components/common/FormField";

export default function LoginForm() {
  const FORM_FIELDS = [
    {
      name: "email",
      type: "text",
      placeholder: "Email ID",
      label: "Email ID",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
  ];

  return (
    <div className="w-9/10 h-fit p-5 py-10 bg-white   rounded-2xl ">
      <Heading>Login</Heading>
      <form className="mt-8">
        <div className="flex flex-col mb-4 mt-8 gap-y-5 ">
          {FORM_FIELDS.map((field, index) => (
            <FormField
              key={index}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              label={field.label}
            />
          ))}
        </div>
        <Forget />
        <Button link="/activation" >Login</Button>
      </form>
    </div>
  );
}
