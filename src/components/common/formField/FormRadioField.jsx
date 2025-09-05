const FormRadioField = (props) => {
  return (
    <label className="text-sm font-medium text-gray-700 mb-2">
      <span className="font-bold">{props?.label}</span>
      <div className={`flex gap-6 ${props?.directionCol ? "flex-col" : "flex-row"}`}>
        {props?.values?.map((item, i) => (
          <label key={i} className="flex items-center gap-2">
            <input type="radio" name={props?.name} className="accent-[#FC5285]" />
            {item}
          </label>
        ))}
      </div>
    </label>
  );
};
export default FormRadioField;
