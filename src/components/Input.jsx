import "./input.css";

const Input = ({ value, placeholder, type, onChange }) => {
  return (
    <input
      onChange={onChange}
      className="input-field"
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
