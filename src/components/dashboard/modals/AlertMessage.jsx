import Button from "@/components/common/Button";

export default function AlertMessage(closeModal) {
  return (
    <Modal heading="Alert Message" closeModal={() => closeModal(false)}>
      <p className="font-bold p-8 px-15">
        We have sent a user activation to user account please ask them to
        verification
      </p>
      <Button label="Ok" onClick={() => closeModal(false)} />
    </Modal>
  );
}
