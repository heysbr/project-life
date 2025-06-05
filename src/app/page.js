import Image from "next/image";
import loginLady from "../components/images/login-lady.svg";
import LoginForm from "../Pages/LoginForm/LoginForm";

export default function Home() {
  return (
    <>
    <div className="flex flex-row my-30 w-7/10  h-7/10 bg-white  drop-shadow-2xl/25 drop-shadow-[#f95b85] rounded-lg overflow-hidden">
      <div className="my-12 flex flex-col justify-center items-center flex-1 ">
        <p className="font-semibold text-3xl  text-[#FC5285] mb-8">“Labour Care Guide”</p>
        <Image src={loginLady} alt="" className="size-90" priority />
      </div>
      <div className="flex items-center justify-center  flex-1  overflow-hidden">
        <LoginForm />           
      </div>
    </div>
    </>
  );
}
