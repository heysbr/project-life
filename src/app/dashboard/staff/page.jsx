import PageTitle from "@/components/common/PageTitle";

const instituteData = [
  {
    name: "Dr. Cherry Blossom",
    dob: "01/01/2000",
    sex: "male",
    instituteName: "City Hospital",
    city: "Springfield",
    medicalCouncil: "Medical Council of City",
    profession: "Cardiologist",
    intials: "CB",
    email: "demo@mail.com",
    mobile: "(123) 456-7890",
  },
];

export default function page() {
  return (
    <div className="flex items-center justify-center h-screen text-5xl">
      This is staff details page
    </div>
  );
}
