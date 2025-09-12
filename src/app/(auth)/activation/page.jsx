"use client";
import LadyPicContainer from "@/components/Container/LadyPicContainer";
import Button from "@/components/common/Button";
import Heading from "@/components/common/layouts/Heading";
import React from "react";
import Timer from "@/components/Activation/Timer";
import OtpInput from "@/components/Activation/OtpInput";

export default function page() {
  return (
    <LadyPicContainer>
      <div className=" my-auto mx-auto w-80 flex flex-col justify-between">
        <Heading>OTP Screen</Heading>

        <p>
          We have sent an OTP on your Mobile no.
          <br />
          <span className="text-[#FC5285]">9755253699</span>
        </p>
        <OtpInput className={"justify-center"} />
        <Timer classname={"text-center "} />
        <Button link="/dashboard" />
      </div>
    </LadyPicContainer>
  );
}
