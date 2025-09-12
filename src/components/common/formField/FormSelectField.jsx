export default function FormSelectField({ options, name, label }) {
  options = options|| ["Option 1", "Option 2"] ;
  return (
    <>
      <label className="text-sm font-bold text-gray-700 mb-2 h-full cursor-pointer">
        {label}
        <select className="w-full px-4 py-2 border border-gray-300 rounded-md cursor-pointer font-normal placeholder-[#BEC5D3] text-sm focus:outline-0">
          {options.map(value => <option key={value}>{value}</option>)}
        </select>
      </label>
    </>
  );
}


