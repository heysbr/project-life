const countryCodes = [
  { code: "+1", country: "USA" },
  { code: "+44", country: "United Kingdom" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+81", country: "Japan" },
  { code: "+86", country: "China" },
  { code: "+33", country: "France" },
  { code: "+49", country: "Germany" },
  { code: "+39", country: "Italy" },
  { code: "+7", country: "Russia" },
  { code: "+55", country: "Brazil" },
  { code: "+27", country: "South Africa" },
  { code: "+34", country: "Spain" },
  { code: "+47", country: "Norway" },
  { code: "+46", country: "Sweden" },
  { code: "+31", country: "Netherlands" },
  { code: "+82", country: "South Korea" },
  { code: "+20", country: "Egypt" },
  { code: "+971", country: "United Arab Emirates" },
  { code: "+92", country: "Pakistan" },
  { code: "+880", country: "Bangladesh" },
  { code: "+64", country: "New Zealand" },
  { code: "+60", country: "Malaysia" },
  { code: "+65", country: "Singapore" },
  { code: "+62", country: "Indonesia" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+351", country: "Portugal" },
  { code: "+30", country: "Greece" },
  { code: "+48", country: "Poland" },
];


export default function Mobile({ children, name }) {
  return (
    <div className="w-fit " >
      <label className="text-sm font-medium text-gray-700 mb-2">
        Mobile No.
      </label><br/>
      <div className="flex flex-row border border-gray-300 rounded-md">
        <SelectCountry options={countryCodes}/>
      <input
        type="tel" pattern="[0-9]{10}" placeholder="Enter phone number"
        className="w-fit px-4 py-2   border-gray-300  border-l flex-1  placeholder-[#BEC5D3] text-sm focus:outline-0"
        required
      />
      </div>
    </div>
  );
}



function SelectCountry({ options }) {
//   children = "Select";
//   options = countryCodes
  ;
  return (
    <>
      <div className="w-fit inline">
        <select className=" px-1 py-2  text-sm focus:outline-0 mr-2">
          {options.map(({ code, country }) => (
            <option className="hover:bg-[#FC5285]" key={code}><>{code}</></option>
          ))}
        </select>
      </div>
    </>
  );
}