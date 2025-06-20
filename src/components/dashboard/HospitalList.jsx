import TableComponent from "./Table";
import HospitalSearchField from "./HospitalSearchField";

export default function HospitalList() {
  return (
    <div className="mx-10">
      <h1 className="text-xl font-semibold mt-10 mb-5">Hospital List</h1>
      <HospitalSearchField />
      <TableComponent />
    </div>
  );
}
