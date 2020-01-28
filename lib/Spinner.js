"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Spinner = props => {
    const { color = "#000", size = 20, style = {} } = props;
    return (react_1.default.createElement(react_native_1.ActivityIndicator, Object.assign({}, props, { color: color, size: size, style: style })));
};
exports.default = Spinner;
//# sourceMappingURL=Spinner.js.map