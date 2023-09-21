import Button from "../components/Button";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import "./landing.css";
const Landing = () => {
  return (
    <div>
      {" "}
      <Navbar text="Search jobs" />
      <div className="landing-container">
        <div>
          <h1 className="heading">Looking for a job in</h1>
          <div className="landing-wrapper">
            <Input placeholder="eg. java" type="text" />
            <Button>Search</Button>
            <button className="serach-btn clr-btn">Clear text</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
