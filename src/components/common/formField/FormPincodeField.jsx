export default function FormPincodeField(props) {
  const label = props?.label || "Label";
  const placeholder = props?.placeholder || "Placeholder";
  const name = props?.name || "name";

  return (
    <label className="text-sm font-bold text-gray-700 mb-2 h-full cursor-pointer">
      {label}
      <input
        type="text"
        maxLength="6"
        pattern="[0-9]{6}"
        inputMode="numeric"
        id={name}
        name={name}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-md font-normal placeholder-[#BEC5D3] text-sm focus:outline-0 "
        required
      />
    </label>
  );
}
