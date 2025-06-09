import Button from "@/components/Forms/Button";
import Forget from "@/components/Forms/Forget";
import Input from "@/components/Forms/Input";

import Password from "@/components/Forms/Password";


export default function LoginForm() {
  return (
    <>
    {/* <h1 className="font-semibold text-3xl  text-[#FC5285] mb-8 z-[999] ">
          “Labour Care Guide”
        </h1>    */}
      <div className="flex flex-col my-30 w-1/3  h-7/10 bg-white  drop-shadow-2xl/25 drop-shadow-[#f95b85] rounded-lg  items-center">
        
        <h2 className="font-medium mt-8 text-2xl">Reset Password</h2>
        <form className="flex flex-col mt-15 w-full px-20 gap-y-7">
            <Input name="mail" placeholder={"Enter Email ID"}>Enter Email ID</Input>
            <Input pass={true} name="password1" placeholder={"Enter New Password"}>Enter New Password</Input>
            <Input pass={true} name="password2" placeholder={"Enter Confirm Password"}>Enter Confirm Password</Input>
          <Button link="/" >Submit</Button>
        </form>
      </div>

    </>
  );
}
