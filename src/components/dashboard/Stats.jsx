import React from "react";
import Hospitals from "@/components/dashboard/cards/Hospitals.svg";
import Staff from "@/components/dashboard/cards/Staff.svg";
import Patients from "@/components/dashboard/cards/Patients.svg";
import Risk from "@/components/dashboard/cards/risk-patients.svg";
import Pie from "@/components/dashboard/svg/pie-chart.svg";
import Image from "next/image";
import Button from "../Forms/Button";
import PageTitle from "../common/PageTitle";

const data = [
  { name: "Hospitals", num: "450", icon: Hospitals },
  { name: "Staff", num: "1200", icon: Staff },
  { name: "Total Patients", num: "1500", icon: Patients },
  { name: "High risk patients", num: "500", icon: Risk },
];

export default function Stats() {
  return (
    <div className="mx-10">
      
      <PageTitle title={'Dashboard- All Hospitals'} btnLabel={'Add Institute'}/>
      <div>
        <div className="flex flex-row">
          <div className="flex-3 grid grid-cols-2  gap-4 pl-0 p-2">
            {data.map((item) => (
              <div
                key={item.name}
                className="bg-white shadow-lg rounded-lg p-5"
              >
                <div className="flex flex-row justify-between">
                  <p className="text-2xl text-[#FC5285] font-semibold ">
                    {item.num}
                  </p>
                  <Image src={item.icon} alt={item.name} className="inline" />
                </div>

                <br />
                {item.name}
              </div>
            ))}
          </div>

          <div className="flex-2  flex flex-row m-2 mr-0 bg-white rounded-lg p-5 shadow-lg justify-between ">
            <div>
              <p className="text-3xl text-[#FC5285] font-medium my-5 m">580</p>
              <p className="font-medium mb-5">Total Deliveries</p>

              <span className="">
                {" "}
                <svg
                  className="inline mr-1"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4.55469" cy="4.50317" r="3.625" fill="#FFDD5E" />
                </svg>
                Veginal 230
              </span>
              <br />
              <span>
                <svg
                  className="inline mr-1"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4.55469" cy="4.50317" r="3.625" fill="#FC5285" />
                </svg>
                Surgical 350
              </span>
            </div>
            <Image src={Pie} alt="" className="w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}
