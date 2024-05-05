import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "@emotion/react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../../config";
import Form from "../../components/forms/form";
import { containerStyle } from "../../assets/form-style";
var Login = function () {
    var navigate = useNavigate();
    var _a = useState(""), error = _a[0], setError = _a[1];
    var fields = [
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
    var handleSubmit = function (formData) {
        fetch("".concat(config.apiBaseUrl, "/api/users/login"), {
            method: "POST",
            body: JSON.stringify({
                email: formData.email,
                password: formData.password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            if (data.message === "Login successful") {
                localStorage.setItem("token", data.session.token);
                localStorage.setItem("userId", data.session.user.id);
                localStorage.setItem("name", data.session.user.name);
                navigate("/dashboard");
            }
            else {
                setError(data.message);
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { css: containerStyle, children: [_jsx("h2", { children: "Login" }), _jsx(Form, { fields: fields, onSubmit: handleSubmit }), _jsx("p", { children: error })] }) }));
};
export default Login;
