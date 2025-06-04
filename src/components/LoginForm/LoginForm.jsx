import React from "react";

export default function LoginForm() {
  return (
    <div class="w-full h-full  p-6 bg-white ">
      <h2 class="text-2xl font-bold  text-gray-800">Login</h2>
      <form class="mt-4">
        {/* Email  */}
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        {/* Password  */}
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        {/* Forget Password  */}
        <div class="flex justify-end mb-4">
          <a href="#" class="text-sm text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>
        {/* Login Button */}
        <button
          type="submit"
          class="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Login
        </button>
      </form>
    </div>
  );
}
