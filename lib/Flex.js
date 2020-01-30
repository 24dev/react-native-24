"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Flex = props => {
    const { justifyContent = "space-between", alignItems = "center", children, vertical = false, style = {} } = props;
    return (react_1.default.createElement(react_native_1.View, { style: Object.assign({ display: "flex", flexDirection: vertical ? "column" : "row", alignItems,
            justifyContent }, style) }, children));
};
exports.default = Flex;
//# sourceMappingURL=Flex.js.map