import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../../config";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setError("Passwords do not match");
      return;
    }
    fetch(`${config.apiBaseUrl}/api/users/register`, {
      method: "POST",
      body: JSON.stringify({
        name: username,
        password: password,
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "User created successfully") {
          localStorage.setItem("token", data.session.token);
          navigate("/");
        } else {
          setError(data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <h1>Sign Up</h1>
        <form>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              handleUsernameChange(e);
            }}
          />
          <input
            type="email"
            placeholder="email"
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          <input
            type="password"
            placeholder="confirm password"
            onChange={(e) => {
              handlePasswordConfirmChange(e);
            }}
          />
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Sign Up
          </button>
        </form>
        <div className="signup__error">{error}</div>
      </div>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default Signup;
