import React from "react";

import Button from "@/components/Forms/Button";
import Forget from "@/components/Forms/Forget";
import Password from "@/components/Forms/Password";
import Label from "@/components/Forms/Label";
import Input from "@/components/Forms/Input";
import Heading from "@/components/layouts/Heading";

export default function LoginForm() {
  return (
    <div className="w-11/16 h-fit p-5 bg-white rounded-2xl mt-4 lg:mt-20 mx-auto ">
      <Heading >Login</Heading>
      <form className="mt-8">
        <div className="flex flex-col mb-4  gap-y-5 ">
          <Input placeholder={"Email ID"}>Email ID</Input>
          
          <Input placeholder={"Password"}>Password</Input>
        </div>
        <Forget/>
        <Button link="/activation">Login</Button>
      </form>
    </div>
  );
}
