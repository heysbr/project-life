import "./globals.css";
import { Poppins, Lato } from "next/font/google";

import svg1 from "../components/images/bg-svg1.svg";
import svg2 from "../components/images/bg-svg2.svg";
import logo from "../components/images/logo.svg";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Add weights you need
  variable: "--font-poppins", // Optional CSS variable name
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Add weights you need
  variable: "--font-lato", // Optional CSS variable name
});

export const metadata = {
  title: "Project Life",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${poppins.variable}  bg-[#FFFBFB]`}>
        <Image src={svg1} alt="" className="absolute left-11 top-3/4" />
        <Image src={svg2} alt="" className="absolute left-5/6 top-11 " />
        <Image src={logo} alt="" className="absolute m-10 lg:m-0 lg:left-60 lg:top-15 " />       
        <div className="flex flex-col justify-center items-center h-screen w-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
