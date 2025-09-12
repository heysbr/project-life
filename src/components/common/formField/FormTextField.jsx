import Error from "./Error";
export default function FormTextField(props) {
  const label = props?.label || "Label";
  const placeholder = props?.placeholder || "Placeholder";
  const name = props?.name || "name";
  const register = props?.register;
  const error = props?.error;

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block text-sm font-bold text-gray-700 mb-1 cursor-pointer"
      >
        {label}
      </label>

      <input
        type="text"
        id={name}
        placeholder={placeholder}
        {...register(name)} 
        className="w-full px-4 py-2 border border-gray-300 rounded-md font-normal placeholder-[#BEC5D3] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {error && <Error error={error} />}
    </div>
  );
}
