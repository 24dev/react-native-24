"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const sizes = {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '24px',
    xxl: '48px',
};
const Space = ({ size = 'md', children }) => {
    return (react_1.default.createElement("div", { style: {
            height: '1px',
            width: '1px',
            margin: sizes[size],
        } }, children));
};
exports.default = Space;
//# sourceMappingURL=Space.js.map