import React from 'react'
import eye from "@/components/images/pass-eye.svg";
import Image from 'next/image';

export default function Textfield({ children, pass = false, name, placeholder }) {
  
  return (
 
     <div className="relative ">
          <label className="text-sm font-medium text-gray-700 mb-2">
            {children}
          </label>
          <input
            type= {pass?"password":"text"}
            id={name}
            name={name}
            placeholder={placeholder}
            className="w-full px-4 py-2  border border-gray-300 rounded-md   placeholder-[#BEC5D3] text-sm focus:outline-0"
            required
          />
          <Image
            src={eye}
            alt="eye"
            className="absolute top-1/2 translate-y-1/2 right-3 "
          />
        </div>
    )
}
