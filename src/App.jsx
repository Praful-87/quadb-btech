import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Landing from "./pages/Landing";

function App() {
  const [count, setCount] = useState(0);
  const data = useSelector((state) => state);
  console.log(data);
  return (
    <>
      
      <Landing />
      {/* login */}
      {/* <Login/> */}
    </>
  );
}

export default App;
