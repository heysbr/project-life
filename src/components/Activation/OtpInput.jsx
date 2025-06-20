"use client"

export default function OtpInput({className}) {
  return (
    <div className={`flex flex-row gap-x-3 ${className}`}>
        <input type="text" id="" name="" placeholder="*" maxLength="1" onKeyUp={()=>console.log("hello")}
            className="w-10 h-10 border text-center border-gray-300 rounded-md placeholder-[#BEC5D3] text-2xl" required
          />
        <input type="text" id="" name="" placeholder="*" maxLength="1"
            className="w-10 h-10 border text-center border-gray-300 rounded-md placeholder-[#BEC5D3] text-2xl focus:border-[#FC5285]" required
          />
        <input type="text" id="" name="" placeholder="*" maxLength="1"
            className="w-10 h-10 border text-center border-gray-300 rounded-md placeholder-[#BEC5D3] text-2xl" required
          />
        <input type="text" id="" name="" placeholder="*" maxLength="1"
            className="w-10 h-10 border text-center border-gray-300 rounded-md placeholder-[#BEC5D3] text-2xl" required
          />
    </div>
  )
}
