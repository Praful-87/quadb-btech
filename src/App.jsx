import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import MainRoutes from "./main-routes/MainRoutes";

function App() {
  return (
    <>
      {/* <Landing /> */}
      {/* login */}
      {/* <Login/> */}
      <MainRoutes />
    </>
  );
}

export default App;
