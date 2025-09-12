import Error from "./Error";

export default function FormCheckboxField(props) {
  const name = props?.name || "name";
  const label = props?.label || "Label";
  const error = props?.error;
  const register = props?.register;
  return (
    <label className="text-sm text-gray-700 font-bold flex items-center cursor-pointer">
      <input
        type="checkbox"
        id={name}
        name={name}
        
        className="me-2 accent-[#FC5285] cursor-pointer"
        {...register(name)}
      />
      {label}
      {error && <Error error={error} />}
    </label>
  );
}

// export default function FormCheckboxField(props) {
//   const name = props?.name || "name";
//   const label = props?.label || "Label";
//   const error = props?.error;
//   const register = props?.register;

//   return (
//     <div className="w-full">
//       <label
//         htmlFor={name}
//         className="text-sm text-gray-700 font-bold flex items-center cursor-pointer"
//       >
//         <input
//           type="checkbox"
//           id={name}
//           {...register(name)}  {/* ✅ RHF tracks this as boolean */}
//           className="me-2 accent-[#FC5285] cursor-pointer"
//         />
//         {label}
//       </label>

//       {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
//     </div>
//   );
// }
