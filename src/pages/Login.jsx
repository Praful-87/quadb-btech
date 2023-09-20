import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1>Login </h1>
        

        <div className="form-input" >
          <p className="placeholder">Name</p>
          <input type="text" />
        </div>
        <div className="form-input" >
          <p className="placeholder">Password</p>
          <input type="text" />
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Login;
