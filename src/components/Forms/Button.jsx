export default function Button({children, width="w-full"}) {
  return (
    <button
          type="submit"
          className={`${width} px-4 py-2 text-white bg-[#FC5285] rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-sm`}
        >
          {children}
        </button>
  )
}
