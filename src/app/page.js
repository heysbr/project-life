import Button from "@/components/Forms/Button";
import svg1 from "@/components/images/bg-svg1.svg";
import svg2 from "@/components/images/bg-svg2.svg";
import logo from "@/components/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
    <div className={`bg-[#FFFBFB]`}>
      <Image
        src={svg1}
        alt=""
        className="absolute left-11 top-11/16 overflow-hidden"
      />
      <Image
        src={svg2}
        alt=""
        className="absolute right-11 down-11/16 overflow-hidden"
      />
      <Link
        href={"/"}
      >
        <Image
          src={logo}
          alt=""
          className="absolute left-45  overflow-hidden size-30 "
        />
      </Link>
      <div className="flex flex-col justify-center items-center h-screen w-full ">
        <Button label="Get Started" link="/login"/>
      </div>
    </div>
  );
}
