"use client";
import LadyPicContainer from "@/components/Container/LadyPicContainer";
import Button from "@/components/common/Button";
import FormField from "@/components/common/FormField";
import Heading from "@/components/common/layouts/Heading";
import { loginFormFields as FORM_FIELDS } from "@/data/fields";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { generateSchema } from "@/components/common/SchemaGenerator";
import { useRouter } from "next/navigation";

const schema = generateSchema(FORM_FIELDS); 

export default function Home() {
  const router = useRouter();
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
    router.push("/activation");
  };
  // login screen
  return (
    <LadyPicContainer>
      <div className="my-auto mx-auto w-80 flex flex-col ">
        <Heading>Login</Heading>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-3"
        >
          {FORM_FIELDS.map((field, index) => (
            <FormField
              key={index}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              label={field.label}
              register={register}
              error={errors[field.name]?.message}
            />
          ))}
          <Button type="submit" label="Login" />
        </form>
      </div>
    </LadyPicContainer>
  );
}
