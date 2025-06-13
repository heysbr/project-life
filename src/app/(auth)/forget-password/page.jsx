import FormField from "@/components/common/FormField";
import Button from "@/components/Forms/Button";
import Forget from "@/components/Forms/Forget";
import Input from "@/components/Forms/Input";
import Heading from "@/components/layouts/Heading";

const FORM_FIELDS = [
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

export default function LoginForm() {
  return (
    <>
      <Heading className={"mb-5"}>Labour Care Guide</Heading>
      <div className="flex flex-col w-9/10 h-fit lg:w-1/3 py-10 lg:h-7/10 bg-white  drop-shadow-2xl/25 drop-shadow-[#f95b85] rounded-lg  items-center">
        <h2 className="font-medium mb-8 text-2xl">Reset Password</h2>
        <form className="px-10">
          <div className="flex flex-col mb-4  gap-y-5 ">
            {FORM_FIELDS.map((field, index) => (
              <FormField
                key={index}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                label={field.label}
              />
            ))}
          </div>
          <Button className="mt-8 w-full" link="/activation">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
