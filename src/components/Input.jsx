import "./input.css";

const Input = ({ placeholder, type }) => {
  return (
    <input className="input-field" type={type} placeholder={placeholder} />
  );
};

export default Input;
