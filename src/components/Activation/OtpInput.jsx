// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// export default function OtpInputs(props) {
//   const rules = props?.rules;
//   const register = props?.register;
//   const otpString=props?.otpString 
//   const setOtpString=props.setotpString

//   const [inputOTP, setinputOTP] = useState("");

//   useEffect(() => {
//     if (inputOTP.length === 4) {
//       console.log("OTP entered:", inputOTP);
//     }
//   }, [inputOTP]);

//   const inputs = Array(4).fill("");

//   return (
//     <div className={`flex flex-row gap-x-3 justify-center `}>
//       {inputs.map((_, index) => (
//         <input
//           key={index}
//           type="text"
//           maxLength={1}
//           name={`otp${index}`}
//           {...(register ? register(`otp${index}`, rules) : {})}
//           className={`size-10 border text-center border-gray-300 rounded-md placeholder-[#BEC5D3] text-2xl `}
//           onChange={(e) => {
//             const value = inputOTP + e.target.value;
//             setinputOTP(value);
//           }}
//         />
//       ))}
//     </div>
//   );
// }
