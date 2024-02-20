import React from "react";

function Button(props) {
  const { buttonType, buttonClass, onClick, children } = props;

  const type = buttonType === "submit" ? "submit" : "reset";

  return (
    <button
      type={type}
      className={`${buttonClass} text-white font-bold py-2 px-4 mx-4 rounded`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
