import Stats from "@/components/dashboard/Stats";
import StaffCards from "@/components/dashboard/StaffCards";
import { Staffdata } from "@/data/data";

export default function page() {
  return (
    <div className="bg-white/80 ">
      <Stats />
      {/* <StaffCards data={Staffdata} /> */}
    </div>
  );
}
