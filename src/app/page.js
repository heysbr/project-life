"use client";
import Button from "@/components/common/Button";
import svg1 from "@/components/images/bg-svg1.svg";
import svg2 from "@/components/images/bg-svg2.svg";
import logo from "@/components/images/logo.svg";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    
    <div className={`bg-[#FFFBFB]`}>
      <Image
        src={svg1}
        alt=""
        className="absolute left-11 top-11/16 overflow-hidden"
      />
      <Image
        src={svg2}
        alt=""
        className="absolute right-11 down-11/16 overflow-hidden"
      />
      <Link
        href={"/"}
      >
        <Image
          src={logo}
          alt=""
          className="absolute left-45  overflow-hidden size-30 "
        />
      </Link>
      <div className="flex justify-center items-center">

      <div className="flex flex-col gap-5 justify-center items-start h-screen w-fit ">
        <Button label="Get Started" link="/login"/>
        <Button label="Dashboard" link="/dashboard"/>
        <Button label="All Hospitals" link="/dashboard/all-hospitals"/>
        <Button label="Staff and Wards Hospitals" link="/dashboard/all-hospitals/staff-wards"/>
        <Button label="Otp Page" link="/activation"/>
        <Button label="Forgot Page" link="/forget-password"/>
        <Button label="Login Page" link="/login"/>
        <Button label="Test Page" link="/test"/>
      </div>
      </div>
    </div>
  );
}
