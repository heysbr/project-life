import FormCheckboxField from "@/components/common/formField/FormCheckboxField";
import FormEmailField from "@/components/common/formField/FormEmailField";
import FormRadioField from "@/components/common/formField/FormRadioField";

export default function page() {
  return (
    <div className=" flex justify-center items-center min-h-screen text-white bg-white">
        <FormEmailField/>
    </div>
  )
}