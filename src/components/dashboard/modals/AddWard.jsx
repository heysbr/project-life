"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/components/common/Button";
import FormTextField from "@/components/common/formField/FormTextField";
import Modal from "./Modal";
import { useForm } from "react-hook-form";


const Schema = z.object({
  ward: z.string().min(1, { message: "Ward name is required" }),
});

export default function AddWard({ closeModal }) {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      mode: "all",
      resolver: zodResolver(Schema),
    });

  const onSubmit = (data) => {
    alert("Form data: " + JSON.stringify(data, null, 2));
    closeModal(false);
  }
  return (
    <Modal closeModal={closeModal} heading="Add a new ward">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-1 flex-col gap-y-7"
      >
        <FormTextField
          label="Add Ward Name"
          placeholder="Enter name"
          register={register}
          name="ward"
          error={errors.ward?.message}
        />
        <div className="flex justify-around">
          <Button variant="secondary" width="w-30" label="Cancel" onClick={closeModal} />
          <Button
            width="w-30"
            label="Add"
            type="submit"
          />
        </div>
      </form>
    </Modal>
  );
}
