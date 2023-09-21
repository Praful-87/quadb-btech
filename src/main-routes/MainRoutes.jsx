import { Link, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing></Landing>} />
      <Route path="/jobs" element={<h1>jobs page</h1>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/signup" element={<h1>signup</h1>} />
    </Routes>
  );
};

export default MainRoutes;
