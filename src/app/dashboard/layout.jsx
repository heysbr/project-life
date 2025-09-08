import ProfileSection from "@/components/common/profile/ProfileSection";
import DashboardContainer from "@/components/Container/DashboardContainer";
import Search from "@/components/dashboard/Search";
import SideBar from "@/components/dashboard/SideBar";

export default function layout({ children }) {
  return (
    <div className={`flex flex-row bg-[#F9F9F9] min-h-screen `}>
      <SideBar />
      <div className="flex-1 ">
        <div className="flex flex-row justify-between bg-[#FFFFFF] h-17 ">
          <Search />
          <ProfileSection />
        </div>
        <DashboardContainer>{children}</DashboardContainer>
      </div>
    </div>
  );
}
