import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "@emotion/react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../../config";
import { containerStyle } from "../../assets/form-style";
import Form from "../../components/forms/form";
var Signup = function () {
    var navigate = useNavigate();
    var _a = useState(""), error = _a[0], setError = _a[1];
    var fields = [
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
    var handleSubmit = function (formData) {
        if (formData.password !== formData.passwordConfirm) {
            setError("Passwords do not match");
            return;
        }
        fetch("".concat(config.apiBaseUrl, "/api/users/register"), {
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
            .then(function (res) { return res.json(); })
            .then(function (data) {
            if (data.message === "User created successfully") {
                localStorage.setItem("token", data.session.token);
                navigate("/");
            }
            else {
                setError(data.message);
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { css: containerStyle, children: [_jsx("h2", { children: "Sign Up" }), _jsx(Form, { fields: fields, onSubmit: handleSubmit }), _jsx("p", { children: error })] }) }));
};
export default Signup;
