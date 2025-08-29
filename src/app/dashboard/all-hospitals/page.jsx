import HospitalSearchField from "@/components/dashboard/HospitalSearchField";
import TableComponent from "@/components/dashboard/Table";

export default function page() {
  return (
    <div className="mx-10">
      <h1 className="text-xl font-semibold pt-10 mb-5">Hospital List</h1>
      <HospitalSearchField />
      <TableComponent />
    </div>
  );
}
