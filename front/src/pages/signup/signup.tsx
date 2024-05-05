/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../../config";
import { containerStyle } from "../../assets/form-style";
import Form, { FormData } from "../../components/forms/form";

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const fields = [
    {
      name: "username",
      label: "Username",
      type: "text",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
    },
    {
      name: "passwordConfirm",
      label: "Confirm Password",
      type: "password",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
    },
  ];

  const handleSubmit = (formData: FormData) => {
    if (formData.password !== formData.passwordConfirm) {
      setError("Passwords do not match");
      return;
    }
    fetch(`${config.apiBaseUrl}/api/users/register`, {
      method: "POST",
      body: JSON.stringify({
        name: formData.username,
        password: formData.password,
        email: formData.email,
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
      <div css={css`${containerStyle}`}>
        <h2>Sign Up</h2>
        <Form fields={fields} onSubmit={handleSubmit} />
        <p>{error}</p>
      </div>
    </>
  );
};

export default Signup;
