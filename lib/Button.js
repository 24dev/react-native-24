"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const themes = {
    primary: {
        border: 0,
        outline: "none",
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: "#4a90e2",
        borderRadius: 3
    },
    outline: {
        outline: "none",
        background: "transparent",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderColor: "rgb(211, 211, 211)",
        borderWidth: 1,
        borderRadius: 3
    },
    invisible: {
        border: 0,
        outline: "none",
        background: "transparent"
    },
    round: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    disabled: {
        opacity: 0.75,
        cursor: "not-allowed"
    }
};
const getTag = (feedback) => {
    switch (feedback) {
        case "opacity":
            return react_native_1.TouchableOpacity;
        case "highlight":
            return react_native_1.TouchableHighlight;
        case "none":
            return react_native_1.TouchableWithoutFeedback;
    }
};
const Button = props => {
    const { feedback = "opacity", theme = "invisible", children, style = {}, onPress, disabled = false } = props;
    const Tag = getTag(feedback);
    const Themes = typeof theme === "string"
        ? themes[theme]
        : Object.assign(Object.assign(Object.assign(Object.assign({}, themes[theme[0]]), themes[theme[1]]), themes[theme[2]]), themes[theme[3]]);
    return (react_1.default.createElement(Tag, { style: Object.assign(Object.assign(Object.assign({}, Themes), (disabled ? themes.disabled : {})), style), disabled: disabled, onPress: onPress }, children));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map