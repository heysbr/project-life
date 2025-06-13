const FormTextField = (props) => {
    console.log("hello", props);
  return (
    <>
      <div className="">
        <label className="text-sm font-medium text-gray-700 mb-2">
          {props?.label} 
        </label>
        <input
          type="text"
          id={props?.name}
          name={props?.name}
          placeholder={props?.placeholder}
          className="w-full px-4 py-2  border border-gray-300 rounded-md  placeholder-[#BEC5D3] text-sm focus:outline-0"
          required
        />
      </div>
    </>
  );
};

export default FormTextField;
