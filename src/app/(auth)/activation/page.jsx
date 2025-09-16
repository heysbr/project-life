"use client";
import LadyPicContainer from "@/components/Container/LadyPicContainer";
import Button from "@/components/common/Button";
import Heading from "@/components/common/layouts/Heading";
import React, { useEffect, useState } from "react";
import Timer from "@/components/Activation/Timer";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function page() {
  const { register, handleSubmit } = useForm({ mode: "all" });
  const router = useRouter();
  const mobile_num = "9755253699";
  const inputs = Array(4).fill("");
  const [char, setChar] = useState("")
  const [inputOTP, setinputOTP] = useState("");

  function onSubmit() {   
    setinputOTP(char);
    router.push("/dashboard");
  }

  useEffect(() => {
    console.log("Entered OTP: ",inputOTP);
  }, [inputOTP]);



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
          <span className="text-[#FC5285]">{mobile_num}</span>
        </p>
        <div className={`flex flex-row gap-x-3 justify-center `}>
          {inputs.map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              name={`otp${index}`}
              {...(register ? register(`otp${index}`, { required: true }) : {})}
              className={`size-10 border text-center border-gray-300 rounded-md placeholder-[#BEC5D3] text-2xl `}
              onChange={(e) => {
                setChar((prev)=> prev + e.target.value );
              }}
            />
          ))}
        </div>
        <Timer classname={"text-center "} />
        <Button type="submit" />
      </form>
    </LadyPicContainer>
  );
}
