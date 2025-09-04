export default function FormSelectField({ options, name }) {
  return (
    <>
      <div className="w-full">
        <label className="text-sm font-medium text-gray-700 mb-2">
          {name}
        </label>
        <select className="w-full px-4 py-2  border border-gray-300 rounded-md text-sm focus:outline-0 ">
          {options.map(({ value }, i) => (
            <option className="hover:bg-[#FC5285]" key={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
