import { z } from "zod";

export const fieldValidators = {
  text: z.string().min(1, "This field is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  email: z.email("Invalid email"),
  mobile: z.string().regex(/^[0-9]{10}$/, "Must be a valid 10-digit number"),
  checkbox: z.boolean().refine((val) => val === true, {message: "You must accept this",}),
  select: z.string().min(1, "Please select an option"),
  radio: z.string().min(1, "Please select one option"),
  datepicker: z.string().min(1, "Please pick a date"),
  pincode: z.string().regex(/^[0-9]{6}$/, "Must be a 6-digit pincode"),
  textarea: z.string().min(1, "This field is required"),
  upload: z.any().refine((file) => file instanceof File, "File is required"),
  download: z.any().optional(), 
  forget: z.string().optional(), 
};

export function generateSchema(fieldConfig) {
  const shape = {};

  fieldConfig.forEach((field) => {
    const validator = fieldValidators[field.type];
    if (validator) {
      shape[field.name] = validator;
    }
  });

  return z.object(shape);
}
