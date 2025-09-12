import { fieldComponentMap } from "@/data/fields";
import FormTextField from "./formField/FormTextField";

export default function FormField(props) {
  const FieldComponent = fieldComponentMap[props?.type] || FormTextField;
  return <FieldComponent {...props} />;
}
