import Search from '@/components/dashboard/Search';
import SideBar from '@/components/dashboard/SideBar';
import React from 'react'

export default function page() {
  return (

      <div className="flex-1 mx-0.5 ">
        <Search/>
            <div className='flex items-center justify-center h-screen text-7xl '>all hospitals </div>
      </div>

  );
}

