import HospitalList from "@/components/dashboard/HospitalList";
import Search from "@/components/dashboard/Search";
import SideBar from "@/components/dashboard/SideBar";
import Stats from "@/components/dashboard/Stats";
import React from "react";

import { Poppins, Lato } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Add weights you need
  variable: "--font-poppins", // Optional CSS variable name
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Add weights you need
  variable: "--font-lato", // Optional CSS variable name
});

export default function page() {
  return (
    <div className={`flex flex-row bg-[#E8E8E8] h-fit ${lato.variable}`}>
      <div className="flex flex-col bg-[#FFFFFF] w-fit">
        <SideBar />
      </div>
      <div className="flex-1 ">
        <Search/>
        <div className="bg-white/80 ">
        <Stats/>
        <HospitalList/>
        </div>
      </div>
    </div>
  );
}
