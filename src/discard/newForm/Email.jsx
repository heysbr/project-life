import React from 'react'

export default function Email({name}) {
  return (
    <div >
      <label className="text-sm font-medium text-gray-700 mb-2">
        Email
      </label>
      <input
        type="email"
        id={name}
        name={name}
        placeholder='Enter Your Mail'
        className="w-full px-4 py-2  border border-gray-300 rounded-md text-sm focus:outline-0"
        required
      />
    </div>
  )
}
