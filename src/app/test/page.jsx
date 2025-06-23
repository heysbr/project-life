import HospitalList from "@/components/dashboard/HospitalList";
import Search from "@/components/dashboard/Search";
import Stats from "@/components/dashboard/Stats";
import SideBar from "@/components/dashboard/SideBar";
import React from "react";
import HospitalSearchField from "@/components/dashboard/HospitalSearchField";
import Button from "@/components/common/Button";
import SortByFilter from "@/components/dashboard/SortByFilter";
import StaffCards from "@/components/dashboard/StaffCards";

const data = [
  { name: "John Doe", id: 1, email: "john.doe@example.com", phoneNo: "+1234567890", profession: "Doctor", totalPatient: 120, initials: "JD" ,active: true},
  { name: "Jane Smith", id: 2, email: "jane.smith@example.com", phoneNo: "+1234567891", profession: "Nurse", totalPatient: 98, initials: "JS" ,active: true},
  { name: "Robert Brown", id: 3, email: "robert.brown@example.com", phoneNo: "+1234567892", profession: "Surgeon", totalPatient: 210, initials: "RB", active: false },
  { name: "Emily Davis", id: 4, email: "emily.davis@example.com", phoneNo: "+1234567893", profession: "Therapist", totalPatient: 85, initials: "ED" , active: true },
  { name: "Michael Wilson", id: 5, email: "michael.wilson@example.com", phoneNo: "+1234567894", profession: "Dentist", totalPatient: 73, initials: "MW", active: true },
  { name: "Sophia Taylor", id: 6, email: "sophia.taylor@example.com", phoneNo: "+1234567895", profession: "Pharmacist", totalPatient: 56, initials: "ST", active: false },
  { name: "David Martinez", id: 7, email: "david.martinez@example.com", phoneNo: "+1234567896", profession: "Physiotherapist", totalPatient: 67, initials: "DM",  active: true },
  { name: "Isabella Hernandez", id: 8, email: "isabella.hernandez@example.com", phoneNo: "+1234567897", profession: "Cardiologist", totalPatient: 150, initials: "IH", active: true },
  { name: "James Lopez", id: 9, email: "james.lopez@example.com", phoneNo: "+1234567898", profession: "Orthopedic", totalPatient: 140, initials: "JL" , active: false },
  { name: "Mia Gonzalez", id: 10, email: "mia.gonzalez@example.com", phoneNo: "+1234567899", profession: "Pediatrician", totalPatient: 125, initials: "MG" , active: true },
  { name: "William Perez", id: 11, email: "william.perez@example.com", phoneNo: "+1234567800", profession: "Psychiatrist", totalPatient: 95, initials: "WP", active: true },
  { name: "Olivia King", id: 12, email: "olivia.king@example.com", phoneNo: "+1234567801", profession: "Oncologist", totalPatient: 110, initials: "OK", active: false },
  { name: "Alexander Wright", id: 13, email: "alexander.wright@example.com", phoneNo: "+1234567802", profession: "Neurologist", totalPatient: 134, initials: "AW" , active: true },
  { name: "Charlotte Scott", id: 14, email: "charlotte.scott@example.com", phoneNo: "+1234567803", profession: "Gynecologist", totalPatient: 89, initials: "CS" , active: true },
  { name: "Benjamin Young", id: 15, email: "benjamin.young@example.com", phoneNo: "+1234567804", profession: "Dermatologist", totalPatient: 102, initials: "BY" , active: false },
  { name: "Amelia Green", id: 16, email: "amelia.green@example.com", phoneNo: "+1234567805", profession: "Radiologist", totalPatient: 78, initials: "AG" , active: true },
  { name: "Lucas Adams", id: 17, email: "lucas.adams@example.com", phoneNo: "+1234567806", profession: "Urologist", totalPatient: 115, initials: "LA" , active: true },
  { name: "Evelyn Clark", id: 18, email: "evelyn.clark@example.com", phoneNo: "+1234567807", profession: "Ophthalmologist", totalPatient: 130, initials: "EC" , active: false },
];




export default function page() {
  return (
    <div className={`flex flex-row bg-[#E8E8E8] h-fit`}>
      <div className="flex flex-col bg-[#FFFFFF] w-fit">
        <SideBar />
      </div>
      <div className="flex-1 ">
        <Search />
        <div className="bg-white/80 ">
          <Stats />
          <div className="flex flex-col mx-10 mt-15 h-fit ">
            <div className="flex flex-row gap-x-7 border-b-2 border-[#CFD2D7] pl-9">
              <div className="bg-[#FC5285] px-7 outline-[#FC5285] outline-2 rounded-t-lg py-2 h-full text-[#FFFFFF] ">
                Staff
              </div>
              <div className="bg-[#FC5285] px-7 outline-[#FC5285] outline-2 rounded-t-lg py-2 h-full text-[#FFFFFF] ">
                Wards
              </div>
            </div>
            <h1 className="font-bold mt-12 mb-8"> Staff List</h1>
            <div className="flex flex-row justify-between">

              <div className="flex flex-row gap-x-5">
                <HospitalSearchField /> <SortByFilter />
              </div>
              <Button label="Add Staff" width="w-32" />
            </div>

            <div className="my-10 h-fit">
                <StaffCards data={data} />              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
