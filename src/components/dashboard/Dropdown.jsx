"use client"
import Image from "next/image";
import React, { useState } from "react";
import Down from "@/components/dashboard/svg/down.svg";


export default function Dropdown({data, name}){
 const [searchTerm, setSearchTerm] = useState("");
   const [isOpen, setIsOpen] = useState(false);
   const items = ["Apple", "Banana", "Cherry", "Date", "Grapes", "Mango", "Orange"];
 
   const filteredItems = items.filter((item) =>
     item.toLowerCase().includes(searchTerm.toLowerCase())
   );
 
   return (
     <div className="relative  ">
       <div className="flex flex-row border  border-gray-300 rounded-full : " onClick={() => setIsOpen(!isOpen) }>
           <input
             type="text"
             placeholder={name}
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             onClick={() => setIsOpen(!isOpen)}
             className="p-1.5 px-3 focus:outline-0 text-sm "/>
             <Image src={Down} alt="down" className="  inline  mr-5 cursor-pointer " />
       </div> 
       {isOpen && (
         <ul className="absolute z-10 w-full bg-white  rounded-md shadow-lg h-fit overflow-y-auto list-disc list-inside">
           {filteredItems.length > 0 ? (
             filteredItems.map((item, index) => (
               <li
                 key={index}
                 className="p-2 pl-5 text-sm hover:bg-gray-100 cursor-pointer  "
                 onClick={() => {
                   setSearchTerm(item);
                   setIsOpen(!isOpen);
                 }}
               >
                 {item}
               </li>
             ))
           ) : (
             <div className="p-2 pl-5 text-gray-500 text-sm">No items found</div>
           )}
         </ul>
       )}
     </div>
   );
}

