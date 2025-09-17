// "use client";
// import { useForm } from "react-hook-form";

// const fieldConfig = {
//   firstName: { label: "First Name", type: "text", required: true },
//   middleName: { label: "Middle Name", type: "text" },
//   lastName: { label: "Last Name", type: "text", required: true },
//   dob: { label: "Date of Birth", type: "date", required: true },
//   sex: { label: "Sex", type: "select", required: true, options: ["Male", "Female", "Other"],},
//   instituteName: { label: "Institute Name", type: "text" },
//   city: { label: "City", type: "text", required: true },
//   medicalCouncil: { label: "Medical Council", type: "text" },
//   profession: { label: "Profession", type: "text", required: true },
//   initials: { label: "Initials", type: "text" },
//   email: { label: "Email", type: "email", required: true },
//   mobile: { label: "Mobile", type: "tel", required: true },
//   assignAdmin: { label: "Assign Admin", type: "checkbox" },
// };

// export default function AutoForm() {
//   const {register, handleSubmit, formState: { errors }, } = useForm();

//   const onSubmit = (data) => { console.table(data);};

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="max-w-md mx-auto flex flex-col gap-4 p-6 border rounded-lg shadow"
//     >
//       {Object.entries(fieldConfig).map(([name, cfg]) => {
//         if (cfg.type === "select") {
//           return (
//             <div key={name}>
//               <label>{cfg.label}{cfg.required && " *"}</label>
//               <select
//                 {...register(name, { required: cfg.required })}
//                 className="border rounded px-2 py-1 w-full"
//               >
//                 <option value="">Select</option>
//                 {cfg.options?.map((opt) => (
//                   <option key={opt} value={opt}>
//                     {opt}
//                   </option>
//                 ))}
//               </select>
//               {errors[name] && (
//                 <span className="text-red-500">{cfg.label} is required</span>
//               )}
//             </div>
//           );
//         }

//         if (cfg.type === "checkbox") {
//           return (
//             <label key={name} className="flex items-center gap-2">
//               <input type="checkbox" {...register(name)} />
//               {cfg.label}
//             </label>
//           );
//         }

//         return (
//           <div key={name}>
//             <input
//               type={cfg.type}
//               placeholder={`${cfg.label}${cfg.required ? " *" : ""}`}
//               {...register(name, { required: cfg.required })}
//               className="border rounded px-2 py-1 w-full"
//             />
//             {errors[name] && (
//               <span className="text-red-500">{cfg.label} is required</span>
//             )}
//           </div>
//         );
//       })}

//       <button type="submit" className="bg-blue-600 text-white rounded py-2 hover:bg-blue-700" >
//         Submit
//       </button>
//     </form>
//   );
// }

