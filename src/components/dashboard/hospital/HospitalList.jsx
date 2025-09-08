import HospitalSearchField from "@/components/dashboard/hospital/HospitalSearchField";
import TableComponent from "@/components/dashboard/hospital/Table";
import PageTitle from "@/components/common/PageTitle";


export default function HospitalList() {
  return (
    <div className="flex flex-col gap-4 ">
      <PageTitle title="Hospitals List" />
      <HospitalSearchField />
      <TableComponent />
    </div>
  );
}
