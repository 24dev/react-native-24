"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Text = ({ children, type = 'span', color, style, bold = false, caps = false, capitalise = false, }) => {
    const Tag = type;
    const isBold = { fontWeight: 'bold' };
    const isCaps = { textTransform: 'uppercase' };
    const isCapitalised = { textTransform: 'capitalize' };
    return (react_1.default.createElement(Tag, { style: Object.assign(Object.assign(Object.assign(Object.assign({ color }, bold ? isBold : {}), caps ? isCaps : {}), capitalise ? isCapitalised : {}), style) }, children));
};
exports.default = Text;
//# sourceMappingURL=Text.js.map