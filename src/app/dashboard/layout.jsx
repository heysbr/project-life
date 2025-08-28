import SideBar from '@/components/dashboard/SideBar'
import React from 'react'


export default function layout({ children }) {
  return (
    <div className={`flex flex-row bg-[#E8E8E8] h-fit`}>
          <div className="flex flex-col bg-[#FFFFFF] w-fit">
            <SideBar />
          </div>
          {children}
        </div>
  )
}
