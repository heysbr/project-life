import HospitalSearchField from "@/components/dashboard/HospitalSearchField";
import TableComponent from "@/components/dashboard/Table";

export default function page() {
  return (
    <>
      <h1 className="text-xl font-semibold">Hospital List</h1>
      <HospitalSearchField />
      <TableComponent />
    </>
  );
}
