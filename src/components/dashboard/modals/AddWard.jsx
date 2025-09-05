import Button from "@/components/common/Button";
import ButtonSecondary from "@/components/common/ButtonSecondary";
import FormTextField from "@/components/common/formField/FormTextField";
import Modal from "./Modal";

export default function AddWard({closeModal}) {
  return (
    <Modal closeModal={closeModal} heading="Add a new ward">
      <FormTextField label="Add Ward Name" placeholder="Enter name" />
      <div className="flex justify-around">
        <Button label="Cancel" onClick={() => closeModal(false)} />
        <ButtonSecondary label="Add" onClick={() => closeModal(false)} />
      </div>
    </Modal>
  );
}
