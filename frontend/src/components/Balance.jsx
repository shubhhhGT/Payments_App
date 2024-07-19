import React from "react";

const Balance = ({ balance }) => {
  return (
    <div className="flex px-4 sm:px-14 my-8">
      <div className="font-bold text-lg">Your Balance</div>
      <div className="text-lg font-semibold ml-4">Rs{balance}</div>
    </div>
  );
};

export default Balance;
