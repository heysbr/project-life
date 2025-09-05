import { countryCodes } from "@/data/data";

export default function FormMobileField() {
  return (
    <div>
      <span className="text-sm font-bold text-gray-700 mb-2">Mobile No.</span>
      <br />
      <label className="flex flex-row border border-gray-300 rounded-md">
        <SelectCountry />
        <input
          type="tel"
          pattern="[0-9]{10}"
          placeholder="Enter phone number"
          className="w-fit px-4 py-2   border-gray-300  border-l flex-1 placeholder-[#BEC5D3] text-sm focus:outline-0"
          required
        />
      </label>
    </div>
  );
}

function SelectCountry() {
  return (
    <select
      className="w-fit inline px-1 py-2 mr-2 text-sm focus:outline-0"
      defaultValue={"+91"}
    >
      {countryCodes.map((code) => (
        <option key={code}>{code}</option>
      ))}
    </select>
  );
}
