import Button from '@/components/Forms/Button'
import Heading from '@/components/layouts/Heading'
import React from 'react'
import Timer from './Timer'
import OtpInput from './OtpInput'

export default function OtpPage() {
  return (
    <div className=" h-fit p-5 bg-white rounded-2xl mt-4 lg:mt-20 mx-auto ">
        <Heading className={"mb-10"}> OTP Screen</Heading>
        <p className='mb-10'>We have sent an OTP on your Mobile no.<br/><span className='text-[#FC5285]'>9755253699</span></p>
        <OtpInput className={"justify-center mb-10"} />
        <Timer className={"text-center mb-10"}/> 
        <Button >Submit</Button>
    </div>
  )
}
