"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_fast_image_1 = __importDefault(require("react-native-fast-image"));
const react_native_linear_gradient_1 = __importDefault(require("react-native-linear-gradient"));
const react_native_1 = require("react-native");
const SkeletonLoader_1 = __importDefault(require("./SkeletonLoader"));
const styles = react_native_1.StyleSheet.create({
    base: {
        backgroundColor: "#fff",
    },
    ring: {
        backgroundColor: "#fff",
    },
    xxs: {
        height: 24,
        width: 24,
        borderRadius: 12,
    },
    xs: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    sm: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    md: {
        height: 70,
        width: 70,
        borderRadius: 35,
    },
    lg: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
});
const Avatar = ({ src, size, style, skeletonLoading, mainColor, secondaryColor, }) => skeletonLoading ? (react_1.default.createElement(SkeletonLoader_1.default, null,
    react_1.default.createElement(react_native_1.View, { style: [styles.base, styles[size], style] },
        react_1.default.createElement(react_native_1.View, { style: [
                {
                    transform: [{ scale: 0.9 }],
                    backgroundColor: "#e3e3e3",
                },
                styles[size],
            ] },
            react_1.default.createElement(react_native_1.View, { style: [
                    styles.ring,
                    { transform: [{ scale: 0.93 }] },
                    styles[size],
                ] },
                react_1.default.createElement(react_native_1.View, { style: [
                        styles.base,
                        {
                            transform: [{ scale: 0.93 }],
                            backgroundColor: "#e3e3e3",
                        },
                        styles[size],
                    ] })))))) : (react_1.default.createElement(react_native_1.View, { style: [styles.base, styles[size], style] }, size === "lg" ? (react_1.default.createElement(react_native_linear_gradient_1.default, { start: { x: 0.2, y: 0.2 }, colors: [mainColor, secondaryColor], style: [{ transform: [{ scale: 0.9 }] }, styles[size]] },
    react_1.default.createElement(react_native_1.View, { style: [
            styles.ring,
            { transform: [{ scale: 0.93 }] },
            styles[size],
        ] }, src ? (react_1.default.createElement(react_native_fast_image_1.default, { source: {
            uri: src,
            priority: react_native_fast_image_1.default.priority.normal,
        }, resizeMode: react_native_fast_image_1.default.resizeMode.cover, style: [
            styles.base,
            { transform: [{ scale: 0.93 }] },
            styles[size],
        ] })) : null))) : (react_1.default.createElement(react_native_1.View, { style: [
        {
            transform: [{ scale: 0.92 }],
            backgroundColor: mainColor,
        },
        styles[size],
    ] }, src ? (react_1.default.createElement(react_native_fast_image_1.default, { source: {
        uri: src,
        priority: react_native_fast_image_1.default.priority.normal,
    }, resizeMode: react_native_fast_image_1.default.resizeMode.cover, style: [
        styles.base,
        { transform: [{ scale: 0.86 }] },
        styles[size],
    ] })) : null))));
Avatar.defaultProps = {
    size: "sm",
    src: null,
    style: {},
    skeletonLoading: false,
};
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map