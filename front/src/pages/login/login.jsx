import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../../config";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${config.apiBaseUrl}/api/users/login`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Login successful") {
          localStorage.setItem("token", data.session.token);
          navigate("/");
        } else {
          setError(data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="login" style={{
        // look at this inline styling!!
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}>
        <div className="login__container">
          <h1>Log In</h1>
          <form>
            <h5>Username</h5>
            <input type="email" onChange={(e) => handleEmailChange(e)} />
            <h5>Password</h5>
            <input type="password" onChange={(e) => handlePasswordChange(e)} />
            <button onClick={(e) => handleSubmit(e)}>Log In</button>
          </form>
          <div className="login__error">{error}</div>
        </div>
        <button onClick={() => navigate("/")}>Go to Home</button>
      </div>
    </div>
  );
};
export default Login;
