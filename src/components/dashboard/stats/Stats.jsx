"use client";
import { useState } from "react";

import { SmallCardData } from "@/data/data";
import { LargeCardData } from "@/data/data";
import AddInstitute from "@/components/dashboard/modals/AddInstitute";
import PageTitle from "@/components/common/PageTitle";
import { SmallCard } from "@/components/dashboard/stats/SmallCard";
import { LargeCard } from "@/components/dashboard/stats/LargeCard";

export default function Stats() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <PageTitle
        title={"Dashboard- All Hospitals"}
        btnLabel={"Add Institute"}
        onClick={() => setOpen(true)}
      />
      {open && <AddInstitute closeModal={setOpen} open={open} />}
      <div className="flex flex-row">
        <SmallCard data={SmallCardData} />
        <LargeCard data={LargeCardData} />
      </div>
    </div>
  );
}
