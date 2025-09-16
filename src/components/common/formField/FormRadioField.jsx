import Error from "./Error";

const FormRadioField = ({
  label,
  name,
  options = [],
  register,
  error,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-bold text-gray-700 mb-2 cursor-pointer">
          {label}
        </label>
      )}

      <div className="flex items-center flex-wrap">
        {options.map((option, i) => (
          <label
            key={i}
            className="text-sm flex items-center font-normal mt-2 mr-5 cursor-pointer"
          >
            <input
              type="radio"
              value={option}
              {...(register ? register(name) : {})}
              className="accent-[#FC5285] mr-2 cursor-pointer"
            />
            {option}
          </label>
        ))}
      </div>

      {error && <Error error={error} />}
    </div>
  );
};

export default FormRadioField;
