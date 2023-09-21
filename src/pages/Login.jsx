import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Input from "../components/Input";
import "./login.css";
const Login = () => {
  return (
    <div className="login-box">
      <Navbar text="Login" />
      <div className="login-wrapper">
        <form action="" className="form">
          <h1>Welcome back👋</h1>
          <Input type='text' placeholder='Name' />
          <Input type='text' placeholder='Password' />
          <Button type='submit'>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
