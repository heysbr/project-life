import Button from "@/components/common/Button";
import FormField from "@/components/common/FormField";
import Image from "next/image";
import defaultProfile from "@/components/svg/defaultProfile.svg";
import addInstituteCrossBtn from "@/components/svg/addInstituteCrossBtn.svg";

import { AddInstituteFields as fields } from "@/data/fields";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { generateSchema } from "@/components/common/SchemaGenerator";
import { useRouter } from "next/navigation";

const schema = generateSchema(fields);

export default function AddInstitute({ closeModal, open }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const onSubmit = (data) => {
    alert("Form data: " + JSON.stringify(data, null, 2));
    closeModal();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 bg-opacity-50 z-40 flex items-center justify-center">
      <div
        className={`fixed inset-auto top-1/2 left-1/2 -translate-1/2 shadow-2xl z-50 grid place-items-center bg-white  min-h-4/5 p-8 rounded-lg w-4/5 transition-all duration-1000 ${
          open ? "opacity-100" : "opacity-0 scale-125"
        }`}
      >
        <div className="flex flex-col items-center gap-y-4  w-full ">
          <Image
          src={addInstituteCrossBtn}
          alt="close"
          className="cursor-pointer absolute right-2 top-2"
          onClick={() => closeModal()}
        />

        <h1 className="font-bold text-2xl pb-5">Add Institute</h1>

        <Image src={defaultProfile} alt="profile" />
        <input
          id="fileUpload"
          type="file"
          className="hidden"
          accept="image/*"
        />
        <label
          htmlFor="fileUpload"
          className="cursor-pointer rounded-2xl bg-[#FC5285] px-3 py-0.5 text-white text-xs hover:opacity-85"
        >
          Add Photo
        </label></div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col md:grid md:grid-cols-3 gap-x-10 m-4 gap-y-5 justify-center"
        >
          {fields.map((field, index) => (
            <FormField
              key={index}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              label={field.label}
              register={register}
              error={errors[field.name]?.message}
            />
          ))}

          
        </form>
        <Button label={"Add Institute"} width={"w-68"} type={"submit"} onClick={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
}
