"use client";
import LadyPicContainer from "@/components/Container/LadyPicContainer";
import Button from "@/components/common/Button";
import Heading from "@/components/common/layouts/Heading";
import React from "react";
import Timer from "@/components/Activation/Timer";
import OtpInput from "@/components/Activation/OtpInput";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  function onSubmit() {
    router.push("/dashboard");
  }

  return (
    <LadyPicContainer>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" my-auto mx-auto w-80 flex flex-col gap-y-5 justify-between"
      >
        <Heading>OTP Screen</Heading>
        <p>
          We have sent an OTP on your Mobile no.
          <br />
          <span className="text-[#FC5285]">9755253699</span>
        </p>
        <OtpInput register={register} rules={{ required: true }} />

        <Timer classname={"text-center "} />
        <Button type="submit" />
      </form>
    </LadyPicContainer>
  );
}
