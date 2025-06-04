import Image from "next/image";
import loginLady from "../components/images/login-lady.svg";
import LoginForm from "../components/LoginForm/LoginForm";

export default function Home() {
  return (
    <div className="flex flex-row h-full lg:h-[64%] bg-white w-7/10 drop-shadow-2xl/25 drop-shadow-[#f95b85] rounded-lg">
      <div className="hidden lg:flex flex-col justify-center items-center font-lato h-full w-1/2">
        <p className="font-semibold text-2xl lg:text-3xl text-[#FC5285] mb-8">“Labour Care Guide”</p>
        <Image src={loginLady} alt="" className="size-80" priority />
      </div>
      <div className="w-1/2">
        <LoginForm />
      </div>
    </div>
  );
}
