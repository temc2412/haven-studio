import React from "react";

function Button(props: {
  buttonType: any;
  buttonClass: any;
  onClick: any;
  children: any;
}) {
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
