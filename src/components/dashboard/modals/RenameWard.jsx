import Button from "@/components/common/Button";
import ButtonSecondary from "@/components/common/ButtonSecondary";
import FormTextField from "@/components/common/formField/FormTextField";
import Modal from "@/components/dashboard/modals/Modal";

export default function RenameWard({ closeModal }) {
  return (
    <Modal heading="Rename Ward" btnText="Update" closeModal={closeModal}>
      <FormTextField
        label="Ward Name"
        name="wardName"
        placeholder="Enter Ward Name"
      />
      <div className="flex justify-around">
        <Button label="Cancel" onClick={() => closeModal()} />
        <ButtonSecondary label="Update" onClick={() => closeModal()} />
      </div>
    </Modal>
  );
}
