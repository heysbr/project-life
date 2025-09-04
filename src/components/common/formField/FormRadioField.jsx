const FormRadioField = ({ name, values, directionCol, radioName }) => {
  return (
    <>
      <label className="text-sm font-medium text-gray-700 mb-2">{name}</label>
      <div className={`flex gap-6 ${directionCol ? "flex-col" : "flex-row"}`}>
        {values?.map((item, i) => (
          <label key={i}>
            <input
              type="radio"
              name={radioName ? radioName : "radio"}
              className="accent-[#FC5285]"
            />
            {item?.value}
          </label>
        ))}
      </div>
    </>
  );
};
export default FormRadioField;
