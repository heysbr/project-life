"use client";
import HospitalSearchField from "@/components/dashboard/HospitalSearchField";
import Pagination from "@/components/dashboard/Pagination";
import TableComponent from "@/components/dashboard/Table";
import { useState } from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="text-xl font-semibold">Hospital List</h1>
      <HospitalSearchField />
      <TableComponent />
    </div>
  );
}
