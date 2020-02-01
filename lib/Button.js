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
    secondary: {
        border: 0,
        outline: "none",
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: "#fff",
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
        paddingVertical: 0,
        paddingHorizontal: 0,
        alignItems: "center",
        justifyContent: "center"
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
    const { feedback = "opacity", theme = "invisible", children, style = {}, onPress = () => { }, onPressIn = () => { }, onPressOut = () => { }, disabled = false, size = 50, underlayColor = "#fafafa" } = props;
    const Tag = getTag(feedback);
    const Themes = typeof theme === "string"
        ? themes[theme]
        : Object.assign(Object.assign({}, themes[theme[0]]), themes[theme[1]]);
    const Style = Array.isArray(style)
        ? Object.assign(Object.assign({}, style[0]), style[1]) : style;
    const Round = theme === "round" || (Array.isArray(theme) && theme.includes("round"))
        ? {
            height: size,
            width: size,
            borderRadius: size / 2
        }
        : {};
    return (react_1.default.createElement(Tag, Object.assign({ style: Object.assign(Object.assign(Object.assign(Object.assign({}, Themes), (disabled ? themes.disabled : {})), Round), Style), disabled: disabled, onPress: onPress, onPressIn: onPressIn, onPressOut: onPressOut }, (feedback === "highlight" ? underlayColor : null)), children));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map