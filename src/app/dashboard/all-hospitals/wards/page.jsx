import Stats from "@/components/dashboard/Stats";
import WardGroup from "@/components/dashboard/WardGroup";

export default function page() {
  return (
    <div className="bg-white/80 ">
      <Stats />
      <WardGroup />
    </div>
  );
}
