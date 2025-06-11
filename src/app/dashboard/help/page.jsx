import Search from '@/components/dashboard/Search';
import SideBar from '@/components/dashboard/SideBar';
import React from 'react'

export default function page() {
  return (
    <div className="flex flex-row bg-[#E8E8E8] h-fit ">
      <div className="flex flex-col bg-[#FFFFFF] ">
        <SideBar />
      </div>
      <div className="flex-1  ">
        <Search/>
            <div className='flex items-center justify-center h-screen text-7xl '>Help </div>
      </div>
    </div>
  );
}

