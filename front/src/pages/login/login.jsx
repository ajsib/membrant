/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../../config";
import Form from "../../components/forms/form";
import { containerStyle } from "../../assets/form-style";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
    },
  ];

  const handleSubmit = (formData) => {
    fetch(`${config.apiBaseUrl}/api/users/login`, {
      method: "POST",
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
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
      <div css={containerStyle}>
        <h2>Login</h2>
        <Form fields={fields} onSubmit={handleSubmit} />
        <p>{error}</p>
      </div>
    </>
  );
};
export default Login;
