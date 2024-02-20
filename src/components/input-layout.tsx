import React from "react";

const InputWithLabel = ({ label, type, ...inputProps }) => {
  return (
    <div className="flex flex-col text-gray-400 my-2">
      <label className="my-1 font-medium" htmlFor="">
        {label}
      </label>
      <input className="my-1" type={type} {...inputProps} />
    </div>
  );
};

export default InputWithLabel;
