import loginLady from "@/components/images/login-lady.svg";
import Image from 'next/image';
import Heading from "../layouts/Heading";

const Container = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row 
      lg:w-7/10 lg:h-7/10 w-9/10 h-1/2
    bg-white drop-shadow-2xl/25 drop-shadow-[#f95b85] rounded-lg ">
      <div className="flex-col justify-center items-center font-lato flex-1 hidden lg:flex">
        <Heading >“Labour Care Guide”</Heading>
        <Image src={loginLady} alt="" className="size-90 " />
      </div>
      <div className="flex items-center justify-center flex-1  ">
        {children}
      </div>
    </div>
  );
};

export default Container;
