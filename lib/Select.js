"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_picker_select_1 = __importDefault(require("react-native-picker-select"));
const CustomSelect = (_a) => {
    var { style = {
        inputIOSContainer: styles.inputContainer,
        inputAndroidContainer: styles.inputContainer,
    } } = _a, restProps = __rest(_a, ["style"]);
    return react_1.default.createElement(react_native_picker_select_1.default, Object.assign({ style: style }, restProps));
};
exports.default = CustomSelect;
const styles = react_native_1.StyleSheet.create({
    inputContainer: {
        position: "relative",
        width: "100%",
        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 8,
        height: 40,
    },
});
//# sourceMappingURL=Select.js.map