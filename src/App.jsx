import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(0);
  const data = useSelector((state) => state);
  console.log(data);
  return (
    <>
      <div
        className="container"
        style={{
          height: "100vh",
          border: "1px solid red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <label htmlFor="input-field">
          what programming language they’re looking for a job in.
        </label>
        <input
          id="input-field"
          type="text"
          
        />
        <button className="serach-btn">Search</button>
      </div>
    </>
  );
}

export default App;
