import FormDownloadSample from "@/components/common/formField/FormDownloadSample";
import FormUploadField from "@/components/common/formField/FormUploadField";

export default function AddStaffViaSheet({ closeModal }) {
  return (
    <Modal heading="Add Staff via Sheet" closeModal={() => closeModal(false)}>
      <div className="flex flex-row gap-x-4 items-center justify-center">
        <FormUploadField />
        <FormDownloadSample />
      </div>
      <div className="flex flex-row gap-x-4 justify-end mt-4">
        <Button variant="secondary" label="Cancel" onClick={() => closeModal(false)} />
        <Button label="Upload" onClick={() => closeModal(false)} />
      </div>
    </Modal>
  );
}
