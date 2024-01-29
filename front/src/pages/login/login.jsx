import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="login">
        <div className="login__container">
          <h1>Log In</h1>
          <form>
            <h5>Username</h5>
            <input type="text" />
            <h5>Password</h5>
            <input type="password" />
            <button type="submit">Log In</button>
          </form>
        </div>
        <button onClick={() => navigate("/")}>Go to Home</button>
      </div>
    </div>
  );
};
export default Login;
