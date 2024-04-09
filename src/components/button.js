import React from "react";

const button = ({ text, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`w-60 ${
        !disabled ? "bg-pink-500" : "bg-pink-200"
      } text-white font-bold py-3 px-4 rounded-md  `}
    >
      {text}
    </button>
  );
};

export default button;
