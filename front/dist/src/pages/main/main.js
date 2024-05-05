var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
var homeStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 2000px;\n"], ["\n  height: 2000px;\n"])));
var headerStyle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f8f9fa;\n  padding: 100px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f8f9fa;\n  padding: 100px;\n"])));
var titleStyle = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-align: center;\n  h1 {\n    font-size: 5rem;\n    margin-bottom: 20px;\n    text-shadow: 0px 4px 10px #6c757d;\n  }\n  h2 {\n    font-size: 2rem;\n    color: #6c757d;\n  }\n"], ["\n  text-align: center;\n  h1 {\n    font-size: 5rem;\n    margin-bottom: 20px;\n    text-shadow: 0px 4px 10px #6c757d;\n  }\n  h2 {\n    font-size: 2rem;\n    color: #6c757d;\n  }\n"])));
var buttonStyle = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-left: 10%;\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"], ["\n  margin-left: 10%;\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"])));
var getStartedButton = css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin: 20px;\n  font-size: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 300px;\n  height: 50px;\n  border-radius: 150px;\n  background-color: #038cfc;\n  color: white;\n  border: none;\n  transition: 0.3s ease;\n  p {\n    transition: 0.3s ease-in-out;\n  }\n  svg {\n    transition: 0.3s ease-in-out;\n  }\n  &:hover {\n    cursor: pointer;\n    background-color: #0d6efd;\n    transform: scale(1.1);\n    svg {\n      transform: translateX(120%);\n    }\n  }\n"], ["\n  margin: 20px;\n  font-size: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 300px;\n  height: 50px;\n  border-radius: 150px;\n  background-color: #038cfc;\n  color: white;\n  border: none;\n  transition: 0.3s ease;\n  p {\n    transition: 0.3s ease-in-out;\n  }\n  svg {\n    transition: 0.3s ease-in-out;\n  }\n  &:hover {\n    cursor: pointer;\n    background-color: #0d6efd;\n    transform: scale(1.1);\n    svg {\n      transform: translateX(120%);\n    }\n  }\n"])));
var loginButton = css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  border: none;\n  font-size: 1rem;\n  background-color: transparent;\n  text-decoration: underline;\n  &:hover {\n    cursor: pointer;\n    color: #0d6efd;\n  }\n"], ["\n  border: none;\n  font-size: 1rem;\n  background-color: transparent;\n  text-decoration: underline;\n  &:hover {\n    cursor: pointer;\n    color: #0d6efd;\n  }\n"])));
var Home = function () {
    var navigate = useNavigate();
    return (_jsx("div", { css: homeStyle, children: _jsxs("div", { css: headerStyle, children: [_jsxs("div", { css: titleStyle, children: [_jsx("h1", { children: "Membrant" }), _jsxs("h2", { children: ["\"For every minute spent organizing, ", _jsx("br", {}), " an hour is earned\" - Benjamin Franklin"] })] }), _jsxs("div", { css: buttonStyle, children: [_jsxs("button", { css: getStartedButton, onClick: function () { return navigate("/signup"); }, children: [_jsx("p", { children: "Get Started" }), " ", _jsx(FiArrowRight, {})] }), _jsx("button", { css: loginButton, onClick: function () { return navigate("/login"); }, children: "Login" })] })] }) }));
};
export default Home;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
