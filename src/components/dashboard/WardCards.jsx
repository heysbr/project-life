"use client";
import WardCard from "@/components/dashboard/WardCard";
import { useState } from "react";
import PageTitle from "../common/PageTitle";
import Modal from "./modals/Modal";
import FormTextField from "../common/formField/FormTextField";
import ArrowBtn from "@/components/svg/arrowBtn.svg";
import Image from "next/image";
import Button from "../common/Button";
import ButtonSecondary from "../common/ButtonSecondary";

export default function WardCards() {
  const [page, setPage] = useState(1);
  const [addWardModal, setAddWardModal] = useState(false);

  const totalPages = Math.ceil(9 / 6);
  return (
    <div className="mb-10 ">
      <PageTitle
        title={"All Wards"}
        btnLabel={"Add Ward"}
        onClick={setAddWardModal}
      />
      {addWardModal && (
        <Modal closeModal={setAddWardModal} heading="Add a new ward">
          <FormTextField label="Add Ward Name" placeholder="Enter name" />
          <div className="flex justify-around">
          <Button label="Cancel" onClick={() => setAddWardModal(false)} />
          <Button label="Cancel" onClick={setAddWardModal} />
          <ButtonSecondary label="Add" onClick={() => setAddWardModal(false)} />
          </div>
        </Modal>
      )}
      {/* Cards */}
      <div className="grid grid-cols-3 gap-6 w-full mb-10 ">
        <WardCard />
        <WardCard />
        <WardCard />
        <WardCard />
        <WardCard />
        <WardCard />
        <WardCard />
        <WardCard />
        <WardCard />
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-end mt-6 space-x-2">
          {/* Previous Butoon */}
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1 cursor-pointer rounded border border-[#E8E8E8] disabled:opacity-50"
          >
            <Image src={ArrowBtn} alt="next" className="rotate-180" />
          </button>

          {/* Numbers Button */}
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx + 1)}
              className={`px-3 py-1 rounded cursor-pointer ${
                page === idx + 1
                  ? "bg-[#FC5285] text-white"
                  : "border-[#E8E8E8] border"
              }`}
            >
              {idx + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-3 py-1 cursor-pointer rounded border border-[#E8E8E8] disabled:opacity-50 transition-all duration-300"
          >
            <Image src={ArrowBtn} alt="next" />
          </button>
        </div>
      )}
    </div>
  );
}