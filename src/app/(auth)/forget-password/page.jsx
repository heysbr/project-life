"use client";
import FormField from "@/components/common/FormField";
import Button from "@/components/common/Button";
import Heading from "@/components/layouts/Heading";

import { LoginFields } from "@/data/fields";

export default function LoginForm() {
  return (
    <>
      <Heading className={"mb-5"}>Labour Care Guide</Heading>
      <div className="flex flex-col w-9/10 h-fit lg:w-1/3 py-10 lg:h-7/10 bg-white  drop-shadow-2xl/25 drop-shadow-[#f95b85] rounded-lg  items-center">
        <h2 className="font-medium mb-8 text-2xl">Reset Password</h2>
        <form className="px-10">
          <div className="flex flex-col mb-4  gap-y-5 ">
            {LoginFields.map((field, index) => (
              <FormField
                key={index}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                label={field.label}
              />
            ))}
          </div>
          <Button className="mt-8 w-full" link="/activation">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
