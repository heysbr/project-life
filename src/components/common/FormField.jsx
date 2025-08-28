import { fieldComponentMap } from "@/data/fields";

export default function FormField(props) {
  const FieldComponent = fieldComponentMap[props?.type] || FormTextField;
  return <FieldComponent {...props} />;
}
