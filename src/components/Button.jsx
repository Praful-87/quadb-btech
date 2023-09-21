import { memo } from "react";
import "./button.css";

const Button = ({ children, type, onClick }) => {
  return (
    <button onClick={onClick} type={type} className="serach-btn">
      {children}
    </button>
  );
};

export default memo(Button);
