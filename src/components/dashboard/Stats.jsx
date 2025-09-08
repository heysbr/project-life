"use client";
import { useState } from "react";

import PageTitle from "../common/PageTitle";
import { LargeCard } from "./LargeCard";
import { SmallCard } from "./SmallCard";

import { SmallCardData } from "@/data/data";
import { LargeCardData } from "@/data/data";
import AddInstitute from "@/Pages/Institute/AddInstitute";

export default function Stats() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <PageTitle
        title={"Dashboard- All Hospitals"}
        btnLabel={"Add Institute"}
        onClick={() => setOpen(true)}
      />
      {open && <AddInstitute  closeModal={setOpen} open={open} />}
      <div className="flex flex-row">
        <SmallCard data={SmallCardData} />
        <LargeCard data={LargeCardData} />
      </div>
    </div>
  );
}
