"use client";
import LadyPicContainer from "@/components/Container/LadyPicContainer";
import Button from "@/components/common/Button";
import FormField from "@/components/common/FormField";
import Heading from "@/components/layouts/Heading";
import {loginFormFields as FORM_FIELDS} from "@/data/fields";




export default function Home() {
  return (
    <LadyPicContainer>
      <div className="w-9/10 h-fit  px-5 lg:px-10   bg-white rounded-2xl ">
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
              <Button link="/activation">Login</Button>
            </form>
          </div>
    </LadyPicContainer>
  );
}
