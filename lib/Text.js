"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles = react_native_1.StyleSheet.create({
    underlined: {
        textDecorationLine: "underline"
    }
});
const sizes = {
    h1: {
        fontSize: 30,
        fontWeight: 700
    },
    h2: {
        fontSize: 24,
        fontWeight: 700
    },
    h3: {
        fontSize: 20,
        fontWeight: 500
    },
    h4: {
        fontSize: 18,
        fontWeight: 400
    },
    h5: {
        fontSize: 16,
        fontWeight: 400
    },
    h6: {
        fontSize: 14,
        fontWeight: 400
    },
    p: {
        fontSize: 14,
        fontWeight: 300
    }
};
const Wrap = props => {
    const { size = "p", children, style = {}, camel = false, underlined = false, numberOfLines = 0, bold = false, skeletonLoading = false, color = "#000" } = props;
    let text = children;
    let fontWeight = {};
    if (camel) {
        text = text.slice(0, 1).toUpperCase() + text.slice(1, text.length);
    }
    if (bold) {
        fontWeight = {
            fontWeight: "600"
        };
    }
    if (skeletonLoading) {
        return (react_1.default.createElement(react_native_1.Text, Object.assign({ style: [
                sizes[size],
                { color },
                style,
                underlined ? styles.underlined : {},
                fontWeight
            ] }, props), "..."));
    }
    return (react_1.default.createElement(react_native_1.Text, Object.assign({ numberOfLines: numberOfLines, style: [
            sizes[size],
            { color },
            style,
            underlined ? styles.underlined : {},
            fontWeight
        ] }, props), text));
};
exports.default = Wrap;
//# sourceMappingURL=Text.js.map