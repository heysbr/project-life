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
    <>
      <div className="mx-10">
        <PageTitle
          title={"Dashboard- All Hospitals"}
          btnLabel={"Add Institute"}
          onClick={() => setOpen(true)}
        />
        <div className="flex flex-row">
          <SmallCard data={SmallCardData} />
          <LargeCard data={LargeCardData} />
        </div>
      </div>
      {open && <AddInstitute closeModal={setOpen} />}
    </>
  );
}
