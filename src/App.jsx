import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(0);
  const data = useSelector((state) => state);
  console.log(data);
  return (
    <>
      <h1>Home</h1>
    </>
  );
}

export default App;
