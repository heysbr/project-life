import Button from "@/components/common/Button";
import FormTextField from "@/components/common/formField/FormTextField";
import Modal from "./Modal";

export default function AddWard({ closeModal }) {
  return (
    <Modal closeModal={closeModal} heading="Add a new ward">
      <FormTextField label="Add Ward Name" placeholder="Enter name" />
      <div className="flex justify-around">
        <Button width="w-30" label="Cancel" onClick={closeModal} />
        <Button
          width="w-30"
          variant="secondary"
          label="Add"
          onClick={closeModal}
        />
      </div>
    </Modal>
  );
}