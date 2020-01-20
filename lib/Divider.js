"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Divider = ({ color = 'lightgrey' }) => {
    return (react_1.default.createElement("div", { style: {
            width: '90%',
            height: '1px',
            backgroundColor: color,
        } }));
};
exports.default = Divider;
//# sourceMappingURL=Divider.js.map