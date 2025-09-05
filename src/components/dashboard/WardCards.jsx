"use client";
import WardCard from "@/components/dashboard/WardCard";
import { useState } from "react";
import PageTitle from "../common/PageTitle";
import AddWard from "./modals/AddWard";
import Pagination from "./Pagination";


export default function WardCards({data}) {
  const [page, setPage] = useState(1);
  const [addWardModal, setAddWardModal] = useState(false);

  const totalPages = Math.ceil(9 / 6);
  return (
    <>
      <PageTitle title={"All Wards"} btnLabel={"Add Ward"} onClick={setAddWardModal}/>
      {addWardModal && <AddWard closeModal={()=>setAddWardModal(false)} />}

      {/* Cards */}
      <div className="grid grid-cols-3 gap-4 w-full ">
        {data.map((ward, idx) => <WardCard key={idx} ward={ward} />)}
      </div>

      {/* Pagination Controls */}
      <Pagination setPage={setPage} page={page} totalPages={totalPages} />
    </>
  );
}
