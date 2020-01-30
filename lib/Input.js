"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Input = props => {
    const { height = 40, style = {}, value = "" } = props;
    return (react_1.default.createElement(react_native_1.TextInput, { style: [
            {
                width: "100%",
                height,
                borderWidth: 1,
                borderColor: "lightgrey",
                borderRadius: 6
            },
            style
        ], value: value }));
};
exports.default = Input;
//# sourceMappingURL=Input.js.map