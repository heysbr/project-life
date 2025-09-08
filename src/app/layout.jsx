import "./globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Project Life",
  description:
    "A project management tool to help you organize and track efficiently.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable}`}>{children}</body>
    </html>
  );
}
