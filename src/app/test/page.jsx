"use client";
import { useForm } from "react-hook-form";
import CustomInput from "./CustomInput";

export default function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-md w-80"
      >
        <h2 className="text-xl font-bold text-center">Custom Input Form</h2>

        <CustomInput
          label="Username"
          name="username"
          register={register}
          rules={{ required: "Username is required" }}
          error={errors.username?.message}
        />

        <button
          type="submit"
          className="py-2 px-4 bg-blue-600 text-white rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
