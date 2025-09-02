import FormTextField from "@/components/common/formField/FormTextField";
import Modal from "@/components/dashboard/modals/Modal";

export default function RenameWard({ closeModal }) {
  return (
    <Modal
      heading="Rename Ward"
      btnText="Update"
      secondaryBtnText="Cancel"
      closeModal={closeModal}
    >
      <FormTextField
        label="Ward Name"
        name="wardName"
        placeholder="Enter Ward Name"
      />
    </Modal>
  );
}
