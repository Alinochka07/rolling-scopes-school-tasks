import React, { PropsWithChildren, ReactElement } from "react";
import "./button.scss";

export interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  buttonType: "submit" | "reset" | "button";
}

const Button = ({ onClick, buttonType, children }: ButtonProps): ReactElement => {
  return (
    <button type={buttonType} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
