import ProfileSection from "@/components/common/profile/ProfileSection";
import Search from "@/components/dashboard/Search";
import SideBar from "@/components/dashboard/SideBar";

export default function layout({ children }) {
  return (
    <div className={`flex flex-row bg-[#E8E8E8] h-fit`}>
      <SideBar />
      <div className="flex-1 h-max">
        <div className="flex flex-row justify-between bg-[#FFFFFF] h-17 ">
          <Search />
          <ProfileSection />
        </div>
        <div className="bg-white/50 h-fit">{children}</div>
      </div>
    </div>
  );
}
