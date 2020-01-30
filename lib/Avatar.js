"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles = react_native_1.StyleSheet.create({
    xxs: {
        height: 24,
        width: 24,
        borderRadius: 12
    },
    xs: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    sm: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    md: {
        height: 70,
        width: 70,
        borderRadius: 35
    },
    lg: {
        height: 100,
        width: 100,
        borderRadius: 50
    }
});
const Avatar = props => {
    const { source, size = "sm", style = {} } = props;
    return (react_1.default.createElement(react_native_1.View, { style: [styles[size], style] },
        react_1.default.createElement(react_native_1.ImageBackground, { source: source, style: styles[size], resizeMode: "cover" })));
};
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map