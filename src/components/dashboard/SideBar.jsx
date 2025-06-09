import React from "react";
import Menu from "@/components/dashboard/Menu.svg";
import Dashboard from "@/components/dashboard/dashboard.svg";
import Hospitals from "@/components/dashboard/all-hospitals.svg";
import Help from "@/components/dashboard/help.svg";
import Image from "next/image";

export default function SideBar() {
  return (
    <div >
      <div>
        Project Life <Image src={Menu} alt="menu" className="inline-block" />
      </div>
      <div>
        <Image src={Dashboard} alt="Dashboard" className="inline-block" />
        Dashboard
      </div>
      <div>
        <Image src={Hospitals} alt="Hospitals" className="inline-block" />
        All Hospitals
      </div>
      <div>
        <Image src={Help} alt="Help" className="inline-block" />
        Help
      </div>
    </div>
  );
}
