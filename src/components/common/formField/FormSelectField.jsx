import Error from "./Error";
export default function FormSelectField(props) {
  const options = props?.options || ["Option 1", "Option 2"];
  const error = props?.error;
  const placeholder = props?.placeholder || "Placeholder";
  const name = props?.name || "name";
  const label = props?.label || "Label";
  const register = props?.register;

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block text-sm font-bold text-gray-700 mb-2 cursor-pointer"
      >
        {label}
      </label>

      <div className="relative">
        <select
          id={name}
          {...register(name)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md cursor-pointer font-normal placeholder-[#BEC5D3] text-sm focus:outline-none appearance-none"
        >
          <option value="">{placeholder}</option>
          {options.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>

        {/* Custom icon */}
        <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>

      {error && <Error error={error} />}
    </div>
  );
}
