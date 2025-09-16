import Link from "next/link";

export default function FormForgetField() {
  return (
    <span className="flex justify-end cursor-pointer text-xs text-[#52575C] font-semibold hover:underline">
      <Link href="/forget-password">
      Forgot password?
      </Link>
    </span>
  );
}
