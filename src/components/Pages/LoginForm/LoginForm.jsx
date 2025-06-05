import Image from "next/image";
import React from "react";

import eye from "../images/pass-eye.svg";

export default function LoginForm() {
  return (
    <div className="w-3/4 h-fit p-6 bg-white rounded-2xl mt-4 lg:mt-20 mx-auto">
      <h2 className="font-semibold text-2xl lg:text-3xl text-[#FC5285]">
        Login
      </h2>
      <form className="mt-8">
        {/* Email  */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email ID
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email id"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md  focus:ring-blue-500 focus:border-blue-500 placeholder-[#BEC5D3] text-sm"
            required
          />
        </div>
        {/* Password  */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>

          <div className="relative ">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2  border border-gray-300 rounded-md  focus:ring-blue-500 focus:border-blue-500 placeholder-[#BEC5D3] text-sm"
              required
            />
            <Image
              src={eye}
              alt="eye"
              className="absolute top-1/2 -translate-y-1/2 right-3 "
            />
          </div>
        </div>
        {/* Forget Password  */}
        <div className="flex justify-end mb-4">
          <a
            href="#"
            className="text-sm text-[#52575C] font-semibold hover:underline"
          >
            Forgot password?
          </a>
        </div>
        {/* Login Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-[#FC5285] rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-sm"
        >
          Login
        </button>
      </form>
    </div>
  );
}
