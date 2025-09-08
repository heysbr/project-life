"use client";
import HospitalSearchField from "@/components/dashboard/HospitalSearchField";
import TableComponent from "@/components/dashboard/Table";

export default function page() {
  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="text-xl font-semibold">Hospital List</h1>
      <HospitalSearchField />
      <TableComponent />
    </div>
  );
}
