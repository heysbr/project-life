export default function StaffWardTab({ setActiveTab, activeTab }) {
  return (
    <div className="flex flex-row gap-x-7 border-b-2 border-[#CFD2D7] pl-9">
      <div onClick={() => setActiveTab("staff")} className={`px-7 cursor-pointer rounded-t-lg py-2 h-full ${
          activeTab === "staff" ? "bg-[#FC5285] text-white" : "text-[#25282B]"
        }`}
      >
        Staff
      </div>
      <div onClick={() => setActiveTab("wards")} className={`px-7 cursor-pointer rounded-t-lg py-2 h-full ${
          activeTab === "wards" ? "bg-[#FC5285] text-white" : "text-[#25282B]"
        }`}
      >
        Wards
      </div>
    </div>
  );
}
