import React from "react";

const InputWithLabel = ({
  label,
  type,
  ...inputProps
}: {
  label: string;
  type: string;
  [key: string]: any;
}) => {
  return (
    <div className="flex flex-col text-gray-400 my-2">
      <label className="my-1 font-medium" htmlFor="">
        {label}
      </label>
      <input type={type} {...inputProps} />
    </div>
  );
};

export default InputWithLabel;
