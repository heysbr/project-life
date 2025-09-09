const FormRadioField = (props) => {
  const options = props?.values || [];
  console.log(options);
  return (
    <label className="relative text-sm font-bold text-gray-700 w-full cursor-pointer">
      {props?.label}
      <div className="flex items-center flex-1 ">
        {options.map((item, i) => (
          <label key={i} className="text-sm w-full flex items-center font-normal mt-2 pr-5 cursor-pointer">
            <input type="radio" name={props?.name} className="accent-[#FC5285] mx-2 cursor-pointer"/>
            {item}
          </label>
        ))}
      </div>
    </label>
  );
};
export default FormRadioField;
