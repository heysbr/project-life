export default function Datepicker({ children, name }) {
  return (
    <div >
      <label className="text-sm font-medium text-gray-700 mb-2">
        {children}
      </label>
      <input
        type="date"
        id={name}
        name={name}
        placeholder="Select"
        className="w-full px-4 py-2  border border-gray-300 rounded-md   placeholder-[#BEC5D3] text-sm focus:outline-0"
        required
      />
    </div>
  );
}
