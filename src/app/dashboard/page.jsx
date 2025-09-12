import HospitalList from "@/components/dashboard/hospital/HospitalList";
import Stats from "@/components/dashboard/stats/Stats";

export default function page() {
  return (
    <div className="flex flex-col h-fit gap-y-8 ">
      <Stats />
      <HospitalList />
    </div>
  );
}