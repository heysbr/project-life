"use client";
import FormTextField from "@/components/common/formField/FormTextField";
import Modal from "@/components/dashboard/Modal";
import { useState } from "react";

export default function page() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" relative h-screen flex items-center justify-center text-black">
      <button onClick={() => setOpen(true)} 
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Open Modal
      </button>
      {open && <Modal closeModal={setOpen} btnText="Add" secondaryBtnText="Cancel" heading="Add Staff">
        <FormTextField placeholder={"e.g., John Doe"} label={"Staff Name"} />
        <FormTextField placeholder={"e.g., John Doe"} label={"Staff Name"} />
        </Modal>}
    </div>
  );
}