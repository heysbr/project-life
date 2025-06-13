import Button from '@/components/Forms/Button'
import Heading from '@/components/layouts/Heading'
import React from 'react'
import Timer from './Timer'
import OtpInput from './OtpInput'

export default function OtpPage() {
  return (
    <div className=" h-fit bg-white rounded-2xl my-auto  mx-auto ">
        <Heading className={"mb-10"}>OTP Screen</Heading>
        <p className='mb-10'>We have sent an OTP on your Mobile no.<br/><span className='text-[#FC5285]'>9755253699</span></p>
        <OtpInput className={"justify-center mb-10"} />
        <Timer classname={"text-center mb-10"}/> 
        <Button link='/forget-password'>Submit</Button>
    </div>
  )
}
