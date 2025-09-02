"use client";
import { useState } from "react";
import StaffCard from "@/components/dashboard/StaffCard";
import PageTitle from "../common/PageTitle";
import Modal from "./modals/Modal";
import FormRadioField from "../common/formField/FormRadioField";
import ArrowBtn from "@/components/svg/arrowBtn.svg";
import Image from "next/image";

const CARDS_PER_PAGE = 6;

export default function StaffCards({ data }) {
  const [page, setPage] = useState(1);
  const [addStaffModal, setAddStaffModal] = useState(false);

  const totalPages = Math.ceil(data.length / CARDS_PER_PAGE);
  const startIdx = (page - 1) * CARDS_PER_PAGE;
  const currentData = data.slice(startIdx, startIdx + CARDS_PER_PAGE);

  return (
    <div className="mb-10 ">
      <PageTitle
        title={"All Staff"}
        btnLabel={"Add Staff"}
        onClick={setAddStaffModal}
      />

      {/* Add Staff Modal */}
      {addStaffModal && (
        <Modal
          closeModal={setAddStaffModal}
          primaryBtnText={"Yes"}
          secondaryBtnText={"No"}
          heading={"Add Staff"}
        >
          <FormRadioField
            values={[
              { value: "Add Staff Manually" },
              { value: "Add Staff via Sheet" },
            ]}
            radioName="staff"
          />
        </Modal>
      )}
      {/* Cards */}
      <div className="grid grid-cols-3 gap-4 ">
        {currentData.map((staff, i) => (
          <StaffCard staff={staff} i={i} key={i} />
        ))}
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
