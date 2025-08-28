import {countryCodes} from "@/data/data";

export default function FormMobileField() {
  return (
    <label>
      <span className="text-sm font-medium text-gray-700 mb-2">Mobile No.</span>
      <br />
      <div className="flex flex-row border border-gray-300 rounded-md">
        <SelectCountry />
        <input
          type="tel"
          pattern="[0-9]{10}"
          placeholder="Enter phone number"
          className="w-fit px-4 py-2   border-gray-300  border-l flex-1 placeholder-[#BEC5D3] text-sm focus:outline-0"
          required
        />
      </div>
    </label>
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
