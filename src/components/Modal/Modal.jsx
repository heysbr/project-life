"use client"
import React, { useState } from 'react'

export default function Modal() {
    const [toggle, setToggle] = useState(false)
  return (
    <div>
  <button className="border rounded-xl p-2 m-5 bg-blue-400 text-white" onClick={()=>setToggle(true)}>Open dialog</button>
  {toggle&&(

    <div className="fixed inset-0  transition-opacity bg-gray-500/75 z-10 flex items-center justify-center min-h-full w-screen overflow-y-auto">
        <div className="bg-gray-50 p-10 rounded-2xl" onClick={()=>setToggle(false)}>Hello world</div>
    </div>
) }
</div>

  )
}
