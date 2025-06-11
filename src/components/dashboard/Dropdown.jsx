"use client"
import Image from "next/image";
import React, { useState } from "react";
import Down from "@/components/dashboard/svg/down.svg";



// export default function Dropdown({data, name}){
//   const [search, setSearch] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

 

//   const filteredData = data.filter((item) =>
//     item.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="relative w-64 h-6">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full flex justify-between bg-gray-100 border border-gray-300 rounded-full px-4 py-1"
//       >
//         {name} <Image src={Down} alt="down" className="  inline  " />
//       </button>
//       {isOpen && (
//         <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
//           <input
//             type="text"
//             placeholder="Search Hospital"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none"
//           />
//           <ul className="max-h-48 overflow-y-auto">
//             {filteredData.map((item, index) => (
//               <li 
//                 key={index}
//                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer "
//                 onClick={() => {
//                   setSearch(item);
//                   setIsOpen(false);
//                 }}
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };



export default function Dropdown({data, name}){
 const [searchTerm, setSearchTerm] = useState("");
   const [isOpen, setIsOpen] = useState(false);
   const items = ["Apple", "Banana", "Cherry", "Date", "Grapes", "Mango", "Orange"];
 
   const filteredItems = items.filter((item) =>
     item.toLowerCase().includes(searchTerm.toLowerCase())
   );
 
   return (
     <div className="relative  ">
       <div className="flex flex-row border  border-gray-300 rounded-full " onClick={() => setIsOpen(!isOpen) }>
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
         <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
           {filteredItems.length > 0 ? (
             filteredItems.map((item, index) => (
               <div
                 key={index}
                 className="p-2 pl-5 text-sm hover:bg-gray-100 cursor-pointer"
                 onClick={() => {
                   setSearchTerm(item);
                   setIsOpen(!isOpen);
                 }}
               >
                 {item}
               </div>
             ))
           ) : (
             <div className="p-2 pl-5 text-gray-500 text-sm">No items found</div>
           )}
         </div>
       )}
     </div>
   );
}

