var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { useState, Fragment } from "react";
import { formStyle } from "../../assets/form-style";
var Form = function (_a) {
    var fields = _a.fields, onSubmit = _a.onSubmit;
    var _b = useState({}), formData = _b[0], setFormData = _b[1];
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prevData) {
            var _a;
            return (__assign(__assign({}, prevData), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        onSubmit(formData);
    };
    return (_jsxs("form", { onSubmit: handleSubmit, css: formStyle, children: [fields.map(function (field) { return (_jsxs(Fragment, { children: [_jsx("label", { htmlFor: field.name, children: field.label }), _jsx("input", { type: field.type, id: field.name, name: field.name, value: formData[field.name] || "", onChange: handleChange })] }, field.lable)); }), _jsx("button", { type: "submit", children: "Submit" })] }));
};
export default Form;
