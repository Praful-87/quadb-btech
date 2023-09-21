import Button from "../components/Button";
import Navbar from "../components/Navbar";
import "./landing.css";
const Landing = () => {
  return (
    <div>
      {" "}
      <Navbar text="Search jobs" />
      <div className="landing-container">
        <div>
          <h1 className="heading">looking for a job in</h1>
          <div className="landing-wrapper">
            <input className="input-field" type="text" placeholder="eg. Java" />
            <Button>Search</Button>
            <button className="serach-btn clr-btn">Clear text</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
