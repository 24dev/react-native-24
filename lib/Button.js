"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const themes = {
    primary: {
        border: 0,
        outline: "none",
        padding: "10px 30px",
        background: "#4a90e2",
        borderRadius: "3px",
        cursor: "pointer",
        "&:hover": {
            background: "rgb(42, 101, 171)"
        }
    },
    outline: {
        outline: "none",
        background: "transparent",
        padding: "10px 30px",
        border: "1px solid rgb(211, 211, 211)",
        borderRadius: "3px",
        cursor: "pointer"
    },
    invisible: {
        border: 0,
        outline: "none",
        background: "transparent",
        cursor: "pointer"
    },
    disabled: {
        opacity: 0.75,
        cursor: "not-allowed"
    }
};
const Button = ({ theme = "invisible", type = "button", children, style, onClick, disabled = false, className = "", form = "" }) => {
    return (react_1.default.createElement("button", { style: Object.assign(Object.assign(Object.assign({}, themes[theme]), (disabled ? themes.disabled : {})), style), type: type, disabled: disabled, onClick: onClick, className: className, form: form }, children));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map