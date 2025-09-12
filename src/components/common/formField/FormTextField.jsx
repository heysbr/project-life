import Error from "./Error";
export default function FormTextField(props) {
  const { label, placeholder, name, register, error, ...rest } = props;

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
        {...rest}
        id={name}
        placeholder={placeholder}
        {...register(name)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md font-normal placeholder-[#BEC5D3] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {error && <Error error={error} />}
    </div>
  );
}
