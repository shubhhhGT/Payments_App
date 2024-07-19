import React from "react";
import DropdownChildren from "./DropdownChildren";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { tokenAtom, userAtom } from "../store/atoms";

const Dropdown = () => {
  const navigate = useNavigate();
  const setToken = useSetRecoilState(tokenAtom);
  const setUser = useSetRecoilState(userAtom);

  function dashClick() {
    navigate("/dashboard");
  }

  function handleSignout() {
    setToken(null);
    setUser({ firstname: "", lastname: "" });
    localStorage.removeItem("token");
    navigate("/");
  }

  function handleSetting() {
    navigate("/settings");
  }
  return (
    <div className="absolute right-0 top-[110%] bg-slate-100 rounded border border-slate-300">
      <DropdownChildren label={"Dashboard"} onClick={dashClick} />
      <DropdownChildren label={"Settings"} onClick={handleSetting} />
      <DropdownChildren label={"Signout"} onClick={handleSignout} />
    </div>
  );
};

export default Dropdown;
