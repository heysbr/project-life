import React from 'react'
import Hospitals from '@/components/dashboard/cards/Hospitals.svg'
import Staff from '@/components/dashboard/cards/Staff.svg'
import Patients from '@/components/dashboard/cards/Patients.svg'
import Risk from '@/components/dashboard/cards/risk-patients.svg'
import Image from 'next/image'

const data =[
  {name:"Hospitals", num:"450", icon:Hospitals},
  {name:"Staff", num:"1200", icon:Staff},
  {name:"Total Patients", num:"1500", icon: Patients},
  {name:"High risk patients", num:"500", icon:Risk},
]

export default function Stats() {
  return (<div className='mx-10'>
    <div className='flex flex-row justify-between '>
      <div className='text-2xl font-bold'>Dashboard- All Hospitals</div>
      <div className='bg-[#FC5285] text-[#FFFFFF] py-1.5 px-3 text-sm rounded-md'>Add Institute</div>
    </div>
    <div>
      <div className="flex flex-row">
        <div className='flex-3 grid grid-cols-2  gap-4 pl-0 p-2'>
          {data.map(item => (
            <div id={item.name} className='bg-amber-300 p-4'>
               {item.num} <br/> {item.name} 
               <Image src={item.icon} alt={item.name}/>
              </div>) 
            )}
          
        </div>

        <div className='flex-2 bg-gray-400 m-2 mr-0 '>hello</div>
      </div>
    </div>
    </div>
  )
}
