"use client";
import React, { useState } from "react";
import eye from "@/components/images/pass-eye.svg";
import Image from "next/image";

import Error from "./Error";
export default function FormPasswordField(props) {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const { label, placeholder, name, register, error, ...rest } = props;

  return (
    <label className="text-sm font-bold text-gray-700 mb-2 h-15 cursor-pointer">
      {label}
      <div className="relative">
        <input
          // type={passwordVisible ? "text" : "password"}
          type="text"
          {...rest}
          id={props?.name}
          name={props?.name}
          placeholder={placeholder}
          {...register(name)}
          className="w-full px-4 py-2 border font-normal border-gray-300 rounded-md placeholder-[#BEC5D3] text-sm focus:outline-0"
        />
        <Image
          src={eye}
          alt="eye"
          className="absolute top-1/2 -translate-1/2 right-0 active:scale-90"
          onMouseUp={() => setPasswordVisible(false)}
          onMouseDown={() => setPasswordVisible(true)}
        />
      </div>
      {error && <Error error={error} />}
    </label>
  );
}


// "use client";
// import React, { useState } from "react";
// import eye from "@/components/images/pass-eye.svg";
// import Image from "next/image";

// import Error from "./Error";
// export default function FormPasswordField(props) {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const { label, placeholder, name, register, error, ...rest } = props;
//   const register = props?.register;
//   const error = props?.error;
//   const name = props?.name || "password";

//   return (
//     <label className="text-sm font-bold text-gray-700 mb-2 h-15 cursor-pointer">
//       {props?.label}
//       <div className="relative">
//         <input
//           type={passwordVisible ? "text" : "password"}
//           id={props?.name}
//           name={props?.name}
//           placeholder={props?.placeholder}
//           {...register(name)}
//           className="w-full px-4 py-2 border font-normal border-gray-300 rounded-md placeholder-[#BEC5D3] text-sm focus:outline-0"
//         />
//         <Image
//           src={eye}
//           alt="eye"
//           className="absolute top-1/2 -translate-1/2 right-0 active:scale-90"
//           onMouseUp={() => setPasswordVisible(false)}
//           onMouseDown={() => setPasswordVisible(true)}
//         />
//       </div>
//       {error && <Error error={error} />}
//     </label>
//   );
// }
