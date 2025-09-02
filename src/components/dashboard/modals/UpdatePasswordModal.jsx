export default function UpdatePasswordModal({closeModal}) {
  return (
    <Modal heading="Update Password" closeModal={() => closeModal(false)}>
      <FormPasswordField
        placeholder="Enter new password"
        label="Enter New Password"
      />
      <FormPasswordField
        placeholder="Enter confirm password"
        label="Confirm Password"
      />
      <div className="flex flex-row gap-x-4 justify-end mt-4">
        <ButtonSecondary label="Cancel" onClick={() => closeModal(false)} />
        <Button label="Update" onClick={() => closeModal(false)} />
      </div>
    </Modal>
  );
}
