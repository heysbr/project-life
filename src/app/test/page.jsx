"use client";
import Button from "@/components/common/Button";
import ButtonSecondary from "@/components/common/ButtonSecondary";
import FormPasswordField from "@/components/common/formField/FormPasswordField";
import Modal from "@/components/dashboard/modals/Modal";
import { useState } from "react";

export default function AlertMessage() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={() => setToggle(true)}
        className="bg-blue-600 p-10  py-2 text-white active:bg-blue-800 rounded-2xl"
      >
        click
      </button>
      {toggle && (
        <Modal heading="Update Password" closeModal={() => setToggle(false)}>
          <FormPasswordField
            placeholder="Enter new password"
            label="Enter New Password"
          />
          <FormPasswordField
            placeholder="Enter confirm password"
            label="Confirm Password"
          />
          <div className="flex flex-row gap-x-4 justify-end mt-4">
            <ButtonSecondary label="Cancel" onClick={() => setToggle(false)} />
            <Button label="Update" onClick={() => setToggle(false)} />
          </div>
        </Modal>
      )}
    </div>
  );
}
