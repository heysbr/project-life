import FormTextField from "@/components/common/formField/FormTextField";
import FormPasswordField from "@/components/common/formField/FormPasswordField";
import FormSelectField from "@/components/common/formField/FormSelectField";
import FormMobileField from "@/components/common/formField/FormMobileField";
import FormEmailField from "@/components/common/formField/FormEmailField";
import FormCheckboxField from "@/components/common/formField/FormCheckboxField";
import FormDatepickerField from "@/components/common/formField/FormDatepickerField";
import FormRadioField from "@/components/common/formField/FormRadioField";
import FormForgetField from "@/components/common/formField/FormForgetField";
import FormUploadField from "@/components/common/formField/FormUploadField";
import FormDownloadSample from "@/components/common/formField/FormDownloadSample";

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
  upload: FormUploadField,
  download: FormDownloadSample,
};

export const StaffFormFields = [
  {
    name: "firstName",
    type: "text",
    placeholder: "Enter first name",
    label: "First Name",
  },
  {
    name: "middleName",
    type: "text",
    placeholder: "Enter middle name",
    label: "Middle Name",
  },
  {
    name: "lastName",
    type: "text",
    placeholder: "Enter last name",
    label: "Last Name",
  },
  {
    name: "dob",
    type: "datepicker",
    placeholder: "Email ID",
    label: "Dob",
  },
  {
    name: "radio",
    type: "text",
    placeholder: "Radio Button",
    label: "Sex",
  },
  {
    name: "email",
    type: "text vsdv",
    placeholder: "Email ID",
    label: "Institute Name",
    options: [{ value: "Option 1" }, { value: "Option 2" }],
  },
  {
    name: "email",
    type: "text",
    placeholder: "Email ID",
    label: "City",
  },
  {
    name: "email",
    type: "text",
    placeholder: "Email ID",
    label: "Middle Name",
  },
  {
    name: "email",
    type: "text",
    placeholder: "Email ID",
    label: "Last Name",
  },
  {
    name: "email",
    type: "text",
    placeholder: "Email ID",
    label: "Initials",
  },
  {
    name: "email",
    type: "text",
    placeholder: "Email ID",
    label: "Email",
  },
  {
    name: "email",
    type: "mobile",
    placeholder: "Email ID",
    label: "Last Name",
  },
];

export const loginFormFields = [
  {
    name: "email",
    type: "text",
    placeholder: "Email ID",
    label: "Email ID",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    label: "Password",
  },
  {
    name: "forget",
    type: "forget",
    placeholder: "",
    label: "",
  },
];

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
