import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Input from "../components/Input";
import "./login.css";
import { useState } from "react";
const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  function onchange(e) {
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
      <Navbar text="Signup" />
      <div className="login-wrapper">
        <form action="" className="form">
          <h1>Create Account❤️</h1>
          <Input
            value={userData.name}
            onChange={onchange}
            name="name"
            type="text"
            placeholder="Username"
          />
          <Input
            value={userData.email}
            onChange={onchange}
            name="email"
            type="email"
            placeholder="Email"
          />
          <Input
            value={userData.password}
            onChange={onchange}
            name="password"
            type="password"
            placeholder="Password"
          />
          <Button onClick={handelSubmit} type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
