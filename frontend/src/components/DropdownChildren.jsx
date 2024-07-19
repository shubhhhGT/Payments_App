import React from "react";
import { VscDashboard } from "react-icons/vsc";
import { GoSignOut } from "react-icons/go";
import { MdOutlineSettings } from "react-icons/md";

const DropdownChildren = ({ label, onClick }) => {
  return (
    <div
      className="flex items-center gap-2 px-2 py-1 border-[1px] border-slate-300 hover:cursor-pointer hover:bg-slate-200"
      onClick={onClick}
    >
      {label === "Dashboard" ? (
        <VscDashboard />
      ) : label === "Signout" ? (
        <GoSignOut />
      ) : (
        <MdOutlineSettings />
      )}
      <div>{label}</div>
    </div>
  );
};

export default DropdownChildren;
