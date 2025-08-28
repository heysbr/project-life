import WardCard from "@/components/dashboard/WardCard";

export default function page() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <WardGroup/>
    </div>
  );
}

function WardGroup() {
  return (
    <div className="grid grid-cols-3 gap-6 w-full">
      <WardCard />
      <WardCard />
      <WardCard />
      <WardCard />
      <WardCard />
      <WardCard />
      <WardCard />
      <WardCard />
      <WardCard />
    </div>
  );
}
