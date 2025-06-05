export default function Input({children}) {
  return (
    <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
           {children}
          </label>
          <input type={children} id={children} name={children} placeholder={`Enter ${children}`}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md  focus:ring-blue-500 focus:border-blue-500 placeholder-[#BEC5D3] text-sm"
            required
          />
        </div>
  )
}
