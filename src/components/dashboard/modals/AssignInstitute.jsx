import Modal from "@/components/dashboard/modals/Modal";
import { hospitalNames } from "@/data/data";
import FormCheckboxField from "@/components/common/formField/FormCheckboxField";

export default function AssignInstitute() {
  return (
    <Modal heading="Assign Institute" btnText="Assign" secondaryBtnText={"Cancel"}>
      {hospitalNames.map((value, i) => (
        <FormCheckboxField key={i} name={`hospital-${i}`}>
          {value}
        </FormCheckboxField>
      ))}
    </Modal>
  );
}
