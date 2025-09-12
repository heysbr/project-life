import Button from "@/components/common/Button";
import FormTextField from "@/components/common/formField/FormTextField";
import Modal from "@/components/dashboard/modals/Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


const Schema = z.object({
  ward: z.string().min(1, { message: "Ward name is required" }),
});

export default function RenameWard({ closeModal }) {

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
    <Modal heading="Rename Ward" btnText="Update" closeModal={closeModal}>
      <form className="flex flex-1 flex-col gap-y-7" onSubmit={handleSubmit(onSubmit)}>

      <FormTextField
        label="Ward Name"
        name="ward"
        placeholder="Enter Ward Name"
        register={register}
        error={errors.ward?.message}
        />
      <div className="flex justify-around">
        <Button width="w-30" label="Cancel" onClick={() => closeModal(false)} />
        <Button
          width="w-30"
          variant="secondary"
          label="Update"
          type="submit"
          />
      </div>
          </form>
    </Modal>
  );
}
