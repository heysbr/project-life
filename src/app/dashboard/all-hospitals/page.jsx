import HospitalSearchField from "@/components/dashboard/HospitalSearchField";
import Search from "@/components/dashboard/Search";
import TableComponent from "@/components/dashboard/Table";

export default function page() {
  return (
    <div className="flex flex-col flex-1 ">
    <Search/>
    <div className="mx-10">
      <h1 className="text-xl font-semibold mt-10 mb-5">Hospital List</h1>
      <HospitalSearchField />
      <TableComponent />
    </div>
    </div>
  );
}
