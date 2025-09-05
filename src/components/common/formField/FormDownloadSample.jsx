"use client";
import Image from "next/image";
import svgDownload from "@/components/svg/download.svg";

export default function FormDownloadSample() {
  return (
    <a
      href="./sample.xlsx"
      download
      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
    >
      Download Sample Sheet
      <Image src={svgDownload} alt="download icon" className="inline ml-2" />
    </a>
  );
}
