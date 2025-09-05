import PageTitle from "@/components/common/PageTitle";
import FormField from "@/components/common/FormField";
import { StaffFormFields as FORM_FIELDS } from "@/data/fields";

export default function page() {
  return <Container2>
    <div className="w-9/10 h-fit  px-5 lg:px-10   bg-white rounded-2xl ">
            <form className="mt-8">
              <div className="grid grid-cols-3 mb-4 mt-8 gap-5 ">
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
            </form>
          </div>
  </Container2>;
}

function Container2({ children }) {
  return (
    <div>
      <PageTitle title="Add Staff" />
      <div className="bg-white shadow-md rounded p-6 mt-6">
      {children}
      </div>
    </div>
  );
}