import "./globals.css";
import { Poppins, Lato } from "next/font/google";


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
      <body className={`${lato.variable} ${poppins.variable}`} >
      {children}
      </body>
    </html>

    // <html lang="en">
    //   <body >
    //   {children}
    //   </body>
    // </html>
  );
}
