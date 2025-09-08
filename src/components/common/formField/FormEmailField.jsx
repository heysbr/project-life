export default function FormEmailField({ name }) {
  return (
    <label className="text-sm font-medium text-gray-700 mb-2">
      Email
      <input
        type="email"
        id={name}
        name={name}
        placeholder="Enter Your Mail"
        className="w-full px-4 py-2  border border-gray-300 rounded-md text-sm focus:outline-0"
        required
      />
    </label>
  );
}
