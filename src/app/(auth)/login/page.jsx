"use client";
import LadyPicContainer from "@/components/Container/LadyPicContainer";
import Button from "@/components/common/Button";
import FormField from "@/components/common/FormField";
import Heading from "@/components/common/layouts/Heading";
import { loginFormFields as FORM_FIELDS } from "@/data/fields";

export default function Home() {
  // login screen
  return (
    <LadyPicContainer>
      <div className="h-96 my-auto mx-auto w-80 flex flex-col justify-between">
        <Heading>Login</Heading>
        <form>
          <div className="flex flex-col">
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
        </form>
        <Button link="/activation">Login</Button>
      </div>
    </LadyPicContainer>
  );
}