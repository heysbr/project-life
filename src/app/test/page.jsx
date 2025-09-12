"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { generateSchema } from "@/components/SchemaGenerator";
import { fields } from "@/data/fields";
import { fieldComponentMap } from "@/data/fields";

const schema = generateSchema(fields);

export default function DynamicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => {
        const Component = fieldComponentMap[field.type];
        return (
          <Component
            key={field.name}
            {...field}
            register={register}
            error={errors[field.name]?.message}
          />
        );
      })}

      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
}
