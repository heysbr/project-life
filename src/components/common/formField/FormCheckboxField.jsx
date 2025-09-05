export default function FormCheckboxField({ name, label }) {
  return (
    <label className="text-sm font-medium text-gray-700" htmlFor={name}>
      <input
        type="checkbox"
        id={name}
        name={name}
        value={label}
        className="me-2  accent-[#FC5285]"
      />
      {label}
    </label>
  );
}
