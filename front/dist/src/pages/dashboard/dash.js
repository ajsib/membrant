var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import NavBar from "../../components/navbar/navbar";
import Card from "../../UI/Card";
var dashboard = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 80%;\n  height: 100%;\n  margin-left: 110px;\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-left: 0;\n  }\n"], ["\n  width: 80%;\n  height: 100%;\n  margin-left: 110px;\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-left: 0;\n  }\n"])));
var dashItemContainer = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 5%;\n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 5%;\n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"])));
var calendarStyle = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 1.5vw;\n  width: 80%;\n  margin-top: 5vw;\n  h3 {\n    font-size: 2vw;\n  }\n  @media (max-width: 768px) {\n    width: 80%;\n    margin-top: 5vw;\n  }\n"], ["\n  font-size: 1.5vw;\n  width: 80%;\n  margin-top: 5vw;\n  h3 {\n    font-size: 2vw;\n  }\n  @media (max-width: 768px) {\n    width: 80%;\n    margin-top: 5vw;\n  }\n"])));
var Dash = function () {
    useEffect(function () {
        document.title = "Dashboard";
    }, []);
    return (_jsxs("div", { css: dashboard, children: [_jsx(NavBar, {}), _jsx("div", { children: _jsxs("h1", { children: ["Welcome ", localStorage.getItem("name"), "!"] }) }), _jsxs("div", { css: {
                    marginLeft: "110px",
                    "@media (max-width: 768px)": {
                        marginLeft: "0",
                    },
                }, children: [_jsxs("div", { css: dashItemContainer, children: [_jsxs(Card, { children: [_jsx("h3", { children: "Projects" }), _jsxs("div", { children: [_jsx("h4", { children: "Project 1" }), _jsx("h4", { children: "Project 2" }), _jsx("h4", { children: "Project 3" })] })] }), _jsxs(Card, { children: [_jsx("h3", { children: "Upcoming Deadlines" }), _jsxs("div", { children: [_jsx("h4", { children: "Deadline 1" }), _jsx("h4", { children: "Deadline 2" }), _jsx("h4", { children: "Deadline 3" })] })] }), _jsxs(Card, { children: [_jsx("h3", { children: "Activity" }), _jsxs("div", { children: [_jsx("h4", { children: "Task 1" }), _jsx("h4", { children: "Task 2" }), _jsx("h4", { children: "Task 3" })] })] })] }), _jsxs("div", { css: calendarStyle, children: [_jsx("h3", { children: "Calendar" }), _jsx("div", {})] })] })] }));
};
export default Dash;
var templateObject_1, templateObject_2, templateObject_3;
