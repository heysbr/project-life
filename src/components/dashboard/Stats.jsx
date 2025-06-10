import React from "react";
import Hospitals from "@/components/dashboard/cards/Hospitals.svg";
import Staff from "@/components/dashboard/cards/Staff.svg";
import Patients from "@/components/dashboard/cards/Patients.svg";
import Risk from "@/components/dashboard/cards/risk-patients.svg";
import Pie from "@/components/dashboard/pie-chart.svg";
import Image from "next/image";
import Cards from "./cards/Cards";

const data = [
  { name: "Hospitals", num: "450", icon: Hospitals },
  { name: "Staff", num: "1200", icon: Staff },
  { name: "Total Patients", num: "1500", icon: Patients },
  { name: "High risk patients", num: "500", icon: Risk },
];

export default function Stats() {
  return (
    <div className="mx-10">
      <div className="flex flex-row justify-between ">
        <div className="text-2xl font-bold">Dashboard- All Hospitals</div>
        <div className="bg-[#FC5285] text-[#FFFFFF] py-1.5 px-3 text-sm rounded-md">
          Add Institute
        </div>
      </div>
      <div>
        <div className="flex flex-row">
          <div className="flex-3 grid grid-cols-2  gap-4 pl-0 p-2">
            {data.map((item) => (
              <div key={item.name} className="bg-gray-100">
                {item.num}{" "}
                <Image src={item.icon} alt={item.name} className="inline" />{" "}
                <br />
                {item.name}
              </div>
            ))}
          </div>

          <div className="flex-2  flex flex-row m-2 mr-0 bg-white rounded-xl justify-between p-4">
            <div>
              <h1>580</h1>
              <p>Total Deliveries</p>
              <span>Veginal 230</span>
              <span>Surgical 230</span>
            </div>
            <Image src={Pie} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
