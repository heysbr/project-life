import FormRadioField from "@/components/common/formField/FormRadioField";
import Modal from "./Modal";
import ButtonSecondary from "@/components/common/ButtonSecondary";
import Button from "@/components/common/Button";

export default function AddStaffModal({closeModal}) {
  return (
    <Modal closeModal={closeModal} heading={"Add Staff"}>
      <FormRadioField
        values={["Add Staff Manually", "Add Staff via Sheet"]}
        radioName="staff"
      />
      <div className="flex justify-around">
        <ButtonSecondary
          label="Cancel"
          onClick={() => closeModal(false)}
        />
        <Button
          label="Add Staff"
          onClick={() => closeModal(false)}
          link="/dashboard/staff/add"
        />
      </div>
    </Modal>
  );
}
