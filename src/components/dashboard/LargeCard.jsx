import Image from "next/image";
import React from "react";

export function LargeCard({ name, num, icon }) {
  return (
    <div className="flex-2 flex flex-row m-2 mr-0 bg-white rounded-lg p-5 shadow-lg justify-between items-center">
      <div>
        <p className="text-3xl text-[#FC5285] font-semibold my-5">{num}</p>
        <p className="font-medium mb-5">{name}</p>
        <ul className="list-disc pl-5">
          <li className="marker:text-[#FC5285]">Veginal 230</li>
          <li className="marker:text-[#FFDB54]">Surgical 350</li>
        </ul>
      </div>
      <Image src={icon} alt={name} className="w-1/2 h-auto" />
    </div>
  );
}
