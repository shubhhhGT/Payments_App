import React from "react";

const InputBox = ({ label, placeholder, onChange, name, value }) => {
  return (
    <label className="self-start w-full block">
      <span className="block font-medium text-left text-sm py-2">{label}</span>
      <input
        className="peer w-full px-2 py-1 border rounded border-slate-200"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value || ""}
      />
    </label>
  );
};

export default InputBox;
