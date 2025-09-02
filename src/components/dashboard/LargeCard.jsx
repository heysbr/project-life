import Image from "next/image";
import Pie from "@/components/svg/pie-chart.svg";

export function LargeCard(props) {
  const { totalDeliveries = 580, veginal = 230, surgical = 350 } = props;
  return (
    <div className="flex-2 flex flex-row m-2 mr-0 bg-white rounded-lg p-5 shadow-lg justify-between items-center">
      <div>
        <p className="text-3xl text-[#FC5285] font-semibold my-5">
          {totalDeliveries}
        </p>
        <p className="font-medium mb-5">Total Deliveries</p>
        <ul className="list-disc pl-5 flex flex-row gap-x-7">
          <li className="marker:text-[#FC5285]">Veginal {veginal}</li>
          <li className="marker:text-[#FFDB54]">Surgical {surgical}</li>
        </ul>
      </div>
      <Image src={Pie} alt="totalDeliveries" className="w-36 h-auto" />
    </div>
  );
}
