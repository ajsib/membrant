var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
var navStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100px;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #f8f9fa;\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100px;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #f8f9fa;\n"])));
var navItemStyle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 10px;\n"], ["\n  margin: 10px;\n"])));
var NavBar = function () {
    return (_jsxs("div", { css: navStyle, children: [_jsx(NavItem, { text: "Projects", link: "/projects" }), _jsx(NavItem, { text: "Account", link: "/account" })] }));
};
var NavItem = function (_a) {
    var link = _a.link, image = _a.image, text = _a.text;
    return (_jsxs("div", { css: navItemStyle, children: [_jsx("img", { src: image }), _jsx(Link, { to: link, children: text })] }));
};
export default NavBar;
var templateObject_1, templateObject_2;
