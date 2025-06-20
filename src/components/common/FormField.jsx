import FormTextField from "@/components/common/formField/FormTextField";
import FormPasswordField from "@/components/common/formField/FormPasswordField";
import FormSelectField from "./formField/FormSelectField";
import FormMobileField from "./formField/FormMobileField";
import FormEmailField from "./formField/FormEmailField";
import FormCheckboxField from "./formField/FormCheckboxField";
import FormDatepickerField from "./formField/FormDatepickerField";
import FormRadioField from "./formField/FormRadioField";

const fieldComponentMap = {
  text: FormTextField,
  password: FormPasswordField,
  select: FormSelectField,
  radio: FormRadioField,
  mobile: FormMobileField,
  email: FormEmailField,
  checkbox: FormCheckboxField,
  datepicker: FormDatepickerField,
};

const FormField = (props) => {
  const FieldComponent = fieldComponentMap[props?.type] || FormTextField;
  return <FieldComponent {...props} />;
};

export default FormField;
