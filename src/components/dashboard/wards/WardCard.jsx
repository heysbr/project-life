import Image from "next/image";
import pieIcon from "@/components/svg/pie-icon.svg";
import deleteIcon from "@/components/svg/delete.svg";
import editIcon from "@/components/svg/edit.svg";
import RenameWard from "../modals/RenameWard";
import { useState } from "react";

export default function WardCard({ ward, handleRemove }) {
  const wardNumber = ward?.wardNumber;
  const totalPatient = ward?.totalPatient;
  const [RenameWardModal, setRenameWardModal] = useState(false);

  

  return (
    <div className="w-full rounded-xl shadow-xl overflow-hidden">
      <div className=" bg-[#FFEEF3] flex flex-row-reverse justify-between"> 
        <div className="flex items-center justify-end gap-x-3 p-2 me-2 ">
          <Image
            src={editIcon}
            alt=""
            className="cursor-pointer"
            onClick={() => setRenameWardModal(true)}
          />
          {RenameWardModal && (
            <RenameWard closeModal={() => setRenameWardModal(false)} />
          )}
          <Image
            src={deleteIcon}
            alt=""
            className="cursor-pointer"
            onClick={() => handleRemove(wardNumber)}
          />
        </div>

        <div className="flex items-center gap-x-5 p-2  ">
          <Image src={pieIcon} alt=""/>
          <h1>Ward {wardNumber}</h1>
        </div>
      </div>
      <div className="h-12 px-5 flex items-center ">
        <span>Total Patients:</span>
        <span className="mx-5">{totalPatient}</span>
      </div>
    </div>
  );
}
