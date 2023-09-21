import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Input from "../components/Input";
import "./login.css";
import { useState } from "react";
const Login = () => {
  const [userData, setUserData] = useState({
    name: "",
    password: "",
  });
  function handelChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }
  function handelSubmit(e) {
    e.preventDefault();
    console.log(userData);
  }
  return (
    <div className="login-box">
      <Navbar text="Login" />
      <div className="login-wrapper">
        <form onSubmit={handelSubmit} className="form">
          <h1>Welcome back❤️</h1>
          <Input
            name="name"
            onChange={handelChange}
            value={userData.name}
            type="text"
            placeholder="Username"
          />
          <Input
            name="password"
            onChange={handelChange}
            value={userData.password}
            type="text"
            placeholder="Password"
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
