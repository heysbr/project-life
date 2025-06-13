import Button from "@/components/Forms/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-pink-50">
      <Button label="Get Started" link="/login"/>
    </div>
  );
}
