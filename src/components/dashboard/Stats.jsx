import React from "react";
import Hospitals from "@/components/dashboard/cards/Hospitals.svg";
import Staff from "@/components/dashboard/cards/Staff.svg";
import Patients from "@/components/dashboard/cards/Patients.svg";
import Risk from "@/components/dashboard/cards/risk-patients.svg";
import Pie from "@/components/dashboard/svg/pie-chart.svg";
import PageTitle from "../common/PageTitle";
import { LargeCard } from "./LargeCard";
import { SmallCard } from "./SmallCard";

export const data = [
  { name: "Hospitals", num: "450", icon: Hospitals },
  { name: "Staff", num: "1200", icon: Staff },
  { name: "Total Patients", num: "1500", icon: Patients },
  { name: "High risk patients", num: "500", icon: Risk },
];

export default function Stats() {
  return (
    <div className="mx-10">
      <PageTitle title={"Dashboard- All Hospitals"} btnLabel={"Add Institute"} />
        <div className="flex flex-row">
          <SmallCard />
          <LargeCard name={"Total Deliveries"} num={"580"} icon={Pie} />
        </div>
    </div>
  );
}


