"use client";
import Image from "next/image";
import svgDownload from "@/components/svg/download.svg";


export default function FormDownloadSample() {
  return (
    <a
      href="./sample.xlsx"
      download
      className="px-4 py-2 bg-[#3CCB97] text-white rounded-lg hover:bg-[#3CCB97]/90 transition flex items-center justify-center"
    >
      Download Sample Sheet
      <Image src={svgDownload} alt="download icon" className="inline ml-2" />
    </a>
  );
}
