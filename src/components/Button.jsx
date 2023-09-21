import "./button.css";

const Button = ({ children, type }) => {
  return (
    <button type={type} className="serach-btn">
      {children}
    </button>
  );
};

export default Button;
