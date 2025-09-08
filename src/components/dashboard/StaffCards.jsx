"use client";
import { useState } from "react";
import StaffCard from "@/components/dashboard/StaffCard";
import PageTitle from "../common/PageTitle";
import AddStaffModal from "./modals/AddStaffModal";
import Pagination from "./Pagination";



export default function StaffCards({ data }) {
  
  const [addStaffModal, setAddStaffModal] = useState(false);
  
  const CARDS_PER_PAGE = 6;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.length / CARDS_PER_PAGE);
  const startIdx = (page - 1) * CARDS_PER_PAGE;
  const currentData = data.slice(startIdx, startIdx + CARDS_PER_PAGE);

  return (
    <>
      <PageTitle title={"All Staff"} btnLabel={"Add Staff"} onClick={setAddStaffModal}/>
      {/* Add Staff Modal */}
      {addStaffModal && <AddStaffModal closeModal={() => setAddStaffModal(false)} />}
      {/* Cards */}
      <div className="grid grid-cols-3 gap-4 ">
        {currentData.map((staff, i) => (
          <StaffCard staff={staff} i={i} key={i} />
        ))}
      </div>
      {/* Pagination Controls */}
      <Pagination setPage={setPage} page={page} totalPages={totalPages} />
    </>
  );
}
