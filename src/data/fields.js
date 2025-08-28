import FormTextField from "@/components/common/formField/FormTextField";
import FormPasswordField from "@/components/common/formField/FormPasswordField";
import FormSelectField from "@/components/common/formField/FormSelectField";
import FormMobileField from "@/components/common/formField/FormMobileField";
import FormEmailField from "@/components/common/formField/FormEmailField";
import FormCheckboxField from "@/components/common/formField/FormCheckboxField";
import FormDatepickerField from "@/components/common/formField/FormDatepickerField";
import FormRadioField from "@/components/common/formField/FormRadioField";
import FormForgetField from "@/components/common/formField/FormForgetField";

export const fieldComponentMap = {
  text: FormTextField,
  password: FormPasswordField,
  select: FormSelectField,
  radio: FormRadioField,
  mobile: FormMobileField,
  email: FormEmailField,
  checkbox: FormCheckboxField,
  datepicker: FormDatepickerField,
  forget: FormForgetField,
};

export const LoginFields = [
  {
    name: "email",
    type: "text",
    placeholder: "Email ID",
    label: "Enter Email ID",
  },
  {
    name: "password1",
    type: "password",
    placeholder: "Password",
    label: "Enter New Password",
  },
  {
    name: "password2",
    type: "password",
    placeholder: "Password",
    label: "Enter Confirm Password",
  },
];

export const AddInstituteFields = [
  {
    name: "institute-name",
    type: "text",
    placeholder: "Enter name",
    label: "Institute Name",
  },
  {
    name: "email",
    type: "text",
    placeholder: "Email ID",
    label: "Email Id",
  },
  {
    name: "mobile",
    type: "mobile",
    placeholder: "Mobile",
    label: "Enter Mobile",
  },
  {
    name: "pincode",
    type: "text",
    placeholder: "Enter Pincode",
    label: "Pincode",
  },
  {
    name: "address",
    type: "text",
    placeholder: "Enter Address",
    label: "Address",
  },
  {
    name: "city",
    type: "text",
    placeholder: "City",
    label: "Enter City",
  },
  {
    name: "state",
    type: "text",
    placeholder: "State",
    label: "Enter State",
  },
];
