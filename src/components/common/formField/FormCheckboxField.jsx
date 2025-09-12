export default function FormCheckboxField({ name, label }) {
  return (
    <label className="text-sm text-gray-700 font-bold flex items-center cursor-pointer" >
      <input
        type="checkbox"
        id={name}
        name={name}
        value={label}
        className="me-2 accent-[#FC5285] cursor-pointer"
      />
      {label}
    </label>
  );
}
