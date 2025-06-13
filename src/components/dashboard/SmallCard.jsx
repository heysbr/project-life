import Image from "next/image";
import React from "react";


export function SmallCard({data}) {
  return (
    <div className="flex-3 grid grid-cols-2 gap-4 pl-0 p-2">
      {data.map(({ name, num, icon }) => (
        <div key={name} className="bg-white shadow-lg rounded-lg px-5 py-4" >
          <div className="flex flex-row justify-between items-center">
            <span className="text-2xl text-[#FC5285] font-semibold">
              {num}
            </span>
            <Image src={icon} alt={name} className="inline" />
          </div>
          <div className="mt-2 font-medium">{name}</div>
        </div>
      ))}
    </div>
  );
}
