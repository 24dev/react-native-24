"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Input = props => {
    const { height = 40, style = {}, multiline = false, value = "", onChange = () => { }, editable = true, placeholder = "" } = props;
    return (react_1.default.createElement(react_native_1.TextInput, Object.assign({ style: [
            {
                width: "100%",
                height,
                borderWidth: 1,
                borderColor: "lightgrey",
                borderRadius: 6
            },
            style
        ], multiline: multiline, onChangeText: value => onChange(value) }, (value ? value : null), { editable: editable, placeholder: placeholder })));
};
exports.default = Input;
//# sourceMappingURL=Input.js.map