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
        <div className="mb-4">
          <Input>Email ID</Input>
          <Label>Password</Label>
          <Password/>
        </div>
        <Forget/>
        <Button >Login</Button>
      </form>
    </div>
  );
}
