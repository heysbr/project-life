import FormTextField from "@/components/common/formField/FormTextField";
import FormPasswordField from "@/components/common/formField/FormPasswordField";

const FormField = (props) => {
  const renderField = () => {
    switch (props?.type) {
      case "text":
        return <FormTextField {...props} />;
      case "password":
        return <FormPasswordField {...props} />;

      default:
        return <FormTextField {...props} />;
    }
  };
  return <>{renderField()}</>;
};

export default FormField;
