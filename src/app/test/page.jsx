"use client";
import { useState } from "react";
import Modaldemo from "./ModalDemo";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <button
        onClick={() => setOpen(true)}
        className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
      >
        Open Modal
      </button>

      <Modaldemo open={open} onClose={() => setOpen(false)} title="My Modal">
        <p className="text-sm text-gray-700">
          This is a simple modal. Focus is trapped inside. Press <kbd>Esc</kbd>{" "}
          to close.
        </p>

        <div className="mt-4">
          <label className="block text-sm">Your name</label>
          <input
            className="mt-1 w-full rounded border px-3 py-2"
            placeholder="Type here"
          />
        </div>
      </Modaldemo>
    </div>
  );
}
