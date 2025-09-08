"use client";
import Image from "next/image";

import svgUpload from "@/components/svg/upload.svg";

export default function FormUploadField() {
  return (
    <label
      htmlFor="fileUpload"
      className="cursor-pointer px-4 py-2 font-bold border border-gray-400 rounded-lg hover:bg-white/50"
    >
      <input id="fileUpload" type="file" className="hidden " />
      <Image alt="upload icon" src={svgUpload} className="inline pr-2" />
      Upload through sheet
    </label>
  );
}
