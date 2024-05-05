var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { css } from "@emotion/react";
var cardStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  width: max-content;\n  padding: 0 2vw 2vw 2vw;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 25%;\n  margin-top: 2vw;\n  background-color: #f0f0f0;\n  border-radius: 1vw;\n  box-shadow: 0.5vw 0.5vw 1vw 0px rgba(0, 0, 0, 0.2);\n  h3 {\n    font-size: 2vw;\n    margin-bottom: 1vw;\n  }\n  p {\n    font-size: 1.5vw;\n  }\n"], ["\n  cursor: pointer;\n  width: max-content;\n  padding: 0 2vw 2vw 2vw;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 25%;\n  margin-top: 2vw;\n  background-color: #f0f0f0;\n  border-radius: 1vw;\n  box-shadow: 0.5vw 0.5vw 1vw 0px rgba(0, 0, 0, 0.2);\n  h3 {\n    font-size: 2vw;\n    margin-bottom: 1vw;\n  }\n  p {\n    font-size: 1.5vw;\n  }\n"])));
var Card = function (_a) {
    var children = _a.children, onClick = _a.onClick;
    return (_jsx("div", { css: cardStyle, onClick: onClick, children: children }));
};
export default Card;
var templateObject_1;
