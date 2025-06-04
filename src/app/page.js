import Image from "next/image";
import loginLady from "../components/images/login-lady.svg";
import LoginForm from "@/components/LoginForm/LoginForm";

export default function Home() {
  return (
    <div className="flex h-[64%] bg-white w-4/5 drop-shadow-2xl shadow-[#FC5285] ">
      <div className="font-lato font-semibold  text-2xl lg:text-3xl text-[#FC5285] h-full w-1/2 bg-amber-200">
        “Labour Care Guide”
        <Image src={loginLady} alt="" />
      </div>
      <div className=" text-2xl h-full w-1/2 bg-gray-200">
        <LoginForm/>
      </div>
    </div>
  );
}
