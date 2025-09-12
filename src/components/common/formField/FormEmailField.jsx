import Error from "./Error";

export default function FormEmailField(props) {
  const label = props?.label || "Label";
  const placeholder = props?.placeholder || "Placeholder";
  const name = props?.name || "name";
  const error = props?.error;
  const register = props?.register;
  return (
    <label className="text-sm font-bold text-gray-700 mb-2 h-full cursor-pointer">
      {label}
      <input
        type="email"
        id={name}
        name={name}
        {...register(name)}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-md font-normal placeholder-[#BEC5D3] text-sm focus:outline-0 "
      />
      {error && <Error error={error} />}
    </label>
  );
}
