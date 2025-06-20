import React, { Children } from "react";

export default function Checkbox({  name, value, children }) {
  // children = "Checkbox"
  name = "hello";
  value = "project life";
  return (
    <div className="w-full">
      
      <input
        type="checkbox"
        id={name}
        name={name}
        value={value}
        className="me-2  accent-[#FC5285]"
      />
      <label className="text-sm font-medium text-gray-700" htmlFor={name}>{children}</label> 
    </div>
  );
}
