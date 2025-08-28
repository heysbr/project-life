"use client";
import AddInstitute from "@/components/Institute/AddInstitute";
import { useState } from "react";

export default function page() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" relative h-screen flex items-center justify-center text-black">
      <button onClick={() => setOpen(true)} 
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Open Modal
      </button>
      {open && <AddInstitute closeModal={setOpen} />}
    </div>
  );
}
