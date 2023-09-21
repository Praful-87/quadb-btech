import "./input.css";

const Input = ({ value, name, placeholder, type, onChange }) => {
  return (
    <input
      name={name}
      onChange={onChange}
      className="input-field"
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
