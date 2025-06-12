"use client"
import Modal from '@/components/Modal/Modal'

import React, { useState } from 'react'


const options = [
    { value: "Option 1" },
    { value: "Option 2" },
    { value: "Option 3" },
    { value: "Option 4" },
  ];
const radioGroup = [{ value: "Male" }, { value: "Female" }];

export default function page() {
  const [toggle, setToggle] = useState(false)
  function handleToggle(){
    setToggle(!toggle);
  }

  return ( <Modal />
  )
}

