import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Input from "../components/Input";
import "./login.css";
const Signup = () => {
  return (
    <div className="login-box">
      <Navbar text="Signup" />
      <div className="login-wrapper">
        <form action="" className="form">
          <h1>Create Account❤️</h1>
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Password" />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
