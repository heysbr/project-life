import { countryCodes } from "@/data/data";

export default function FormMobileField() {
  return (
    <label className="text-sm font-bold text-gray-700 mb-2 h-15 cursor-pointer">
      Mobile No.
      <div className="relative flex flex-row border border-gray-300 rounded-md">
        <SelectCountry />
        <input
          type="tel"
          pattern="[0-9]{10}"
          placeholder="Enter phone number"
          className="w-fit px-4 py-2 font-normal border-gray-300 border-l flex-1 placeholder-[#BEC5D3] text-sm focus:outline-0"
          required
        />
      </div>
    </label>
  );
}

function SelectCountry() {
  return (
    <select
      className="w-fit inline px-1 py-2 mr-2 text-sm focus:outline-0 cursor-pointer"
      defaultValue={"+91"}
    >
      {countryCodes.map((code) => (
        <option key={code}>{code}</option>
      ))}
    </select>
  );
}
