"use client";
import FormField from "@/components/common/FormField";
import Button from "@/components/common/Button";
import Heading from "@/components/common/layouts/Heading";

import { LoginFields } from "@/data/fields";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { generateSchema } from "@/components/common/SchemaGenerator";
import { useRouter } from "next/navigation";

const schema = generateSchema(LoginFields);

export default function LoginForm() {
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
    router.push("/dashboard");
  };

  return (
    <>
      <Heading>Labour Care Guide</Heading>
      <div className="flex flex-col w-1/3 py-10 h-7/10 bg-white drop-shadow-2xl/25 drop-shadow-[#f95b85] rounded-lg items-center">
        <h2 className="font-medium mb-8 text-2xl">Reset Password</h2>
        {/* <form className="px-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-4 gap-y-5">
            {LoginFields.map((field, index) => (
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
          </div>
          <Button type="submit" className="mt-8"/>
        </form> */}
        <form
          onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-10 px-20 w-full"
          
        >

            {LoginFields.map((field, index) => (
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
    </>
  );
}
