const FormRadioField = () => {
  return (
    <>
      <label className="text-sm font-medium text-gray-700 mb-2">
        {children}
      </label>
      <div className="flex flex-row gap-x-10">
        {radioGroup.map(({ value }, i) => (
          <span key={i}>
             {" "}
            <input
              type="radio"
              id={value}
              name={children}
              value={value}
              className="accent-[#FC5285] "
            />
             <label htmlFor={value}>{value}</label>
          </span>
        ))}
      </div>
    </>
  );
};
export default FormRadioField;
