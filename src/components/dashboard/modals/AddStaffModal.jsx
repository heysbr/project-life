import FormRadioField from "@/components/common/formField/FormRadioField";
import Modal from "./Modal";
import Button from "@/components/common/Button";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ✅ Zod schema
const staffSchema = z.object({
  staff: z.enum(["Add Staff Manually", "Add Staff via Sheet"], {
    error: "Please select a staff option",
  }),
});

export default function AddStaffModal({ closeModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: zodResolver(staffSchema),
  });

  const onSubmit = (data) => {
    alert("Form data: " + JSON.stringify(data, null, 2));
    closeModal(false);
  };

  return (
    <Modal closeModal={closeModal} heading="Add Staff">
      <form
        className="flex flex-1 flex-col gap-y-7"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormRadioField
          name="staff"
          options={["Add Staff Manually", "Add Staff via Sheet"]}
          register={register}
          error={errors.staff?.message} 
        />

        <div className="flex justify-around">
          <Button
            width="w-30"
            variant="secondary"
            label="Cancel"
            onClick={() => closeModal(false)}
          />
          <Button width="w-30" label="Add Staff" type="submit" />
        </div>
      </form>
    </Modal>
  );
}
