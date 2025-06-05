import Image from "next/image";

import eye from "../../components/images/pass-eye.svg";

export default function Password() {
  return (
    <div className="relative ">
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        className="w-full px-4 py-2  border border-gray-300 rounded-md  focus:ring-blue-500 focus:border-blue-500 placeholder-[#BEC5D3] text-sm"
        required
      />
      <Image
        src={eye}
        alt="eye"
        className="absolute top-1/2 -translate-y-1/2 right-3 "
      />
    </div>
  );
}
