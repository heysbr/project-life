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
import FormPincodeField from "@/components/common/formField/FormPincodeField";
import FormTextareaField from "@/components/common/formField/FormTextareaField";

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
  pincode: FormPincodeField,
  textarea: FormTextareaField, 
};

export const TestFields = [
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
  },
  {
    name: "radio",
    type: "radio",
    placeholder: "Radio Buttons",
    label: "Radio Buttons Field",
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

export const EditHospitalFields = [
  {
    name: "state",
    type: "text",
    placeholder: "Enter state",
    label: "State",
  },
  {
    name: "district",
    type: "text",
    placeholder: "Enter district",
    label: "District",
  },
  {
    name: "city",
    type: "select",
    placeholder: "Select city",
    label: "City",
    options: [], // you can populate list of cities
  },
  {
    name: "hospital",
    type: "select",
    placeholder: "Select hospital",
    label: "Hospital",
    options: ["Apollo Hospital"], // example
  },
  {
    name: "adminEmail",
    type: "email",
    placeholder: "Enter admin email",
    label: "Admin Email",
  },
  {
    name: "phone",
    type: "mobile",
    placeholder: "Enter phone no.",
    label: "Phone no.",
    prefix: "+91", // extra property for country code
  },
  {
    name: "totalStaff",
    type: "number",
    placeholder: "Enter total staff",
    label: "Total Staff",
  },
  {
    name: "totalPatient",
    type: "number",
    placeholder: "Enter total patient",
    label: "Total Patient",
  },
  {
    name: "highRiskPatient",
    type: "number",
    placeholder: "Enter high risk patient",
    label: "High risk Patient",
  },
  {
    name: "status",
    type: "select",
    placeholder: "Select status",
    label: "Status",
    options: ["Active", "Inactive"], // example
  },
];


export const EditStafffields = [
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
    placeholder: "Select",
    label: "Date of Birth",
  },
  {
    name: "sex",
    type: "radio",
    label: "Sex",
    options: ["Male", "Female"],
  },
  {
    name: "instituteName",
    type: "text",
    placeholder: "Enter institute name",
    label: "Institute Name",
  },
  {
    name: "city",
    type: "text",
    placeholder: "Enter City",
    label: "City",
  },
  {
    name: "medicalCouncil",
    type: "select",
    placeholder: "Enter medical council",
    label: "Medical Council",
    options: [], // can add council list here
  },
  {
    name: "profession",
    type: "select",
    placeholder: "Select",
    label: "Profession i.e. nurse or doctor",
    options: ["Doctor", "Nurse"], // example
  },
  {
    name: "initials",
    type: "text",
    placeholder: "Enter initials",
    label: "Initials",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Enter email",
    label: "Email",
  },
  {
    name: "mobile",
    type: "mobile",
    placeholder: "Enter mobile no.",
    label: "Mobile no.",
    prefix: "+91", // extra property
  },
  {
    name: "assignAdmin",
    type: "checkbox",
    label: "Do you assign admin role to this staff?",
  },
];


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
    type: "text",
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
    placeholder: "Enter Institute Name",
    label: "Institute Name",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Enter Email",
    label: "Email",
  },
  {
    name: "mobile",
    type: "mobile",
    placeholder: "Mobile",
    label: "Enter Mobile Number",
  },
  {
    name: "address",
    type: "text",
    placeholder: "Enter Address",
    label: "Address",
  },
  {
    name: "pincode",
    type: "pincode",
    placeholder: "Enter Pincode",
    label: "Pincode",
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
