"use client";
import Button from "@/components/common/Button";

const PageTitle = ({ title, btnLabel, onClick }) => {
  return (
    <div className="flex flex-row justify-between">
      <h1 className="text-2xl font-semibold">{title}</h1>
      {btnLabel && <Button onClick={onClick} label={btnLabel}/>}
    </div>
  );
};
export default PageTitle;
