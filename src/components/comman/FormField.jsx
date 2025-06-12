import React from "react";
import FormTextField from "./FormField/FormTextField";
import FormRadioField from "./formField/FormRadioField";
const FormField = (props) => {
    console.log("props-formfield", props);
  const renderField = () => {
    switch (props?.type) {
      case "radio":
        return <FormRadioField {...props} />;
        case "password":
            return <FormTextField {...props} />
      default:
        return <FormTextField {...props} />;
    }
  };
  return <>{renderField()}</>;
};

export default FormField;
