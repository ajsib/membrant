import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../../config";
import { CenterDiv } from "../../components/styled components/centerdiv";
import { CenterButton } from "../../components/styled components/centerbutton";

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
          localStorage.setItem("userId", data.session.user.id);
          localStorage.setItem("name", data.session.user.name);
          navigate("/dashboard");
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
        Log In
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
          <h5>Email</h5>
          <input type="email" onChange={(e) => handleEmailChange(e)} />
          <h5>Password</h5>
          <input type="password" onChange={(e) => handlePasswordChange(e)} />
          <button onClick={(e) => handleSubmit(e)}>Log In</button>
        </form>
        <div>{error}</div>
      </CenterDiv>
      <CenterButton onClick={() => navigate("/")}>Go to Home</CenterButton>
    </>
  );
};
export default Login;
