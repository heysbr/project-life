"use client"
import React, { useState } from 'react'
import Radiobutton from '../newForm/Radiobutton'
import Image from 'next/image'
import Cross from '@/components/dashboard/svg/cross.svg'
import SecondaryButton from '../newForm/SecondaryButton'

export default function Modal({title, children}) {
  title="hello world"
    const [toggle, setToggle] = useState(false)
  return (
    <div>
  <button className="border rounded-xl p-2 m-5 bg-blue-400 text-white" onClick={()=>setToggle(true)}>Open dialog</button>
  {toggle&&(

    <div className="fixed inset-0  transition-opacity bg-gray-500/75 z-10 flex items-center justify-center min-h-full w-screen overflow-y-auto">
        <div className="relative w-1/2 bg-gray-50 p-10 rounded-lg" >
          <Image src={Cross} alt='cross' className='absolute top-3 right-3 active:fill-black' onClick={()=>setToggle(false)}/>
          <h1 className='text-center mb-10 text-2xl font-semibold'>{title}</h1>  



          {children}
          <SecondaryButton width='w-1/3 mx-5' >No</SecondaryButton>
          <SecondaryButton width='w-1/3 mx-5' >No</SecondaryButton>
          <Radiobutton radioGroup = {[{ value: "1" }, { value: "2" }, { value: "3" }]}/>
          
        </div>
    </div>
) }
</div>

  )
}
