"use client";
import WardCard from "@/components/dashboard/WardCard";
import { useState } from "react";
import PageTitle from "../common/PageTitle";
import AddWard from "./modals/AddWard";
import Pagination from "./Pagination";


export default function WardCards({data}) {

  const [addWardModal, setAddWardModal] = useState(false);

  const CARDS_PER_PAGE = 9;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.length / CARDS_PER_PAGE);
  const startIdx = (page - 1) * CARDS_PER_PAGE;
  const currentData = data.slice(startIdx, startIdx + CARDS_PER_PAGE);
  return (
    <>
      <PageTitle title={"All Wards"} btnLabel={"Add Ward"} onClick={setAddWardModal}/>
      {addWardModal && <AddWard closeModal={()=>setAddWardModal(false)} />}

      {/* Cards */}
      <div className="grid grid-cols-3 gap-4 w-full ">
        {currentData.map((ward, idx) => <WardCard key={idx} ward={ward} />)}
      </div>

      {/* Pagination Controls */}
      <Pagination setPage={setPage} page={page} totalPages={totalPages} />
    </>
  );
}
