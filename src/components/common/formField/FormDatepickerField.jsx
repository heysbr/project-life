export default function FormDatepickerField(props) {
  const name = props?.name || "name";
  const label = props?.label || "Label";

  return (
    <label className="text-sm font-bold text-gray-700 mb-2 cursor-pointer">
      {label}
      <input
        type="date"
        id={name}
        name={name}
        className="w-full px-4 py-2 font-normal border cursor-pointer border-gray-300 rounded-md placeholder-[#BEC5D3] text-sm focus:outline-0"
        required
      />
    </label>
  );
}
