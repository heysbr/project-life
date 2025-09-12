"use client";
import FormField from "@/components/common/FormField";

const fields = [
  {
    name: "textfield",
    type: "text",
    placeholder: "Enter text",
    label: "Text Field",
  },
  {
    name: "passwordfield",
    type: "password",
    placeholder: "Enter Password",
    label: "Password Field",
  },
  {
    name: "select",
    type: "select",
    placeholder: "Enter Select",
    label: "Select Field",
    options: ["Option 1", "Option 2"],
  },
  {
    name: "radio",
    type: "radio",
    placeholder: "Radio Buttons",
    label: "Radio Buttons Field",
    options: ["Option 1", "Option 2", "Option 3"],
  },
  {
    name: "mobile",
    type: "mobile",
    placeholder: "Enter Mobile Number",
    label: "Mobile Number Field",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Enter Email",
    label: "Email Field",
  },
  {
    name: "checkbox",
    type: "checkbox",
    placeholder: "Enter Checkbox",
    label: "Checkbox Field",
  },
  {
    name: "datepicker",
    type: "datepicker",
    placeholder: "Enter Date Picker",
    label: "Date Picker Field",
  },
  {
    name: "forget",
    type: "forget",
    placeholder: "Enter Forget",
    label: "Forget Field",
  },
  {
    name: "upload",
    type: "upload",
    placeholder: "Enter Upload",
    label: "Upload Field",
  },
  {
    name: "download",
    type: "download",
    placeholder: "Enter Download",
    label: "Download Field",
  },
];

export default function Page() {
  return (
    <div className="grid place-items-center p-10">
      <div className="grid grid-cols-3 border p-10 gap-x-10 ">
        {fields.map((field, index) => (
          <FormField
            key={index}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            label={field.label}
            values={field?.options}
          />
        ))}
      </div>
    </div>
  );
}
