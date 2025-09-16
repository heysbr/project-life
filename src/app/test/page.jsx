"use client";
import FormPasswordField from "@/components/common/formField/FormPasswordField";
import { useForm } from "react-hook-form";

export default function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    
  });
  const handleClick = (data) => {
    alert("clicked ");
  }

  return (
    <>
      <FormPasswordField register={register} error={errors["password"]?.message} name="password"/>
      <button onClick={handleSubmit(handleClick)}>Submit</button>
    </>
  );
}
