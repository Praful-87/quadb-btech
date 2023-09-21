import { Link, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing></Landing>} />
      <Route path="/jobs" element={<h1>jobs page</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default MainRoutes;
