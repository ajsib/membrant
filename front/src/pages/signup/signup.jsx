import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signup">
      <div className="signup__container">
        <h1>Sign Up</h1>
        <form>
          <h5>Username</h5>
          <input type="text" />
          <h5>Email</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <h5>Confirm Password</h5>
          <input type="password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default Signup;
