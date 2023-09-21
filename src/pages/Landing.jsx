import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import "./landing.css";
import { useCallback } from "react";
const Landing = () => {
  const [value, setValue] = useState("");
  const fetchData = useCallback(
    function () {
      console.log(value);
    },
    [value]
  );
  const onChange = useCallback(function (e) {
    setValue(e.target.value);
  }, []);
  return (
    <div>
      {" "}
      <Navbar text="Search jobs" />
      <div className="landing-container">
        <div>
          <h1 className="heading">Looking for a job in</h1>
          <div className="landing-wrapper">
            <Input
              value={value}
              onChange={onChange}
              placeholder="eg. java"
              type="text"
            />
            <Button onClick={fetchData}>Search</Button>
            <button onClick={() => setValue("")} className="serach-btn clr-btn">
              Clear text
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
