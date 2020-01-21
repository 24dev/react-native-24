"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const sizes = {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 24,
    xxl: 48,
};
const Space = ({ size = 'md', children, style }) => {
    return (react_1.default.createElement(react_native_1.View, { style: [
            {
                height: 1,
                width: 1,
                margin: sizes[size]
            },
            style
        ] }, children));
};
exports.default = Space;
//# sourceMappingURL=Space.js.map