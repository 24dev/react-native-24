"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Divider = props => {
    const { color = "lightgrey", width = "100%", style = {} } = props;
    return (react_1.default.createElement(react_native_1.View, { style: [
            {
                width,
                height: 1,
                backgroundColor: color
            },
            style
        ] }));
};
exports.default = Divider;
//# sourceMappingURL=Divider.js.map