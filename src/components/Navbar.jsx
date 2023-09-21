import "./navbar.css";

const Navbar = ({text}) => {
  return (
    <div className="nav-container">
      <h1>{text}</h1>
    </div>
  );
};

export default Navbar;
