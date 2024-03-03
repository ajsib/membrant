import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../../config";
import { CenterDiv } from "../../components/styled components/centerdiv";
import { CenterButton } from "../../components/styled components/centerbutton";

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
    <>
      <h1
        style={{
          textAlign: "center",
          width: "100%",
        }}
      >
        Sign Up
      </h1>
      <CenterDiv>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <h5>Username</h5>
          <input
            type="text"
            onChange={(e) => {
              handleUsernameChange(e);
            }}
          />
          <h5>Email</h5>
          <input
            type="email"
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          <h5>Confirm Password</h5>
          <input
            type="password"
            onChange={(e) => {
              handlePasswordConfirmChange(e);
            }}
          />
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Sign Up
          </button>
        </form>
        <div className="signup__error">{error}</div>
      </CenterDiv>
      <CenterButton onClick={() => navigate("/")}>Go to Home</CenterButton>
    </>
  );
};

export default Signup;
