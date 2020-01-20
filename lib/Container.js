"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Container = ({ children }) => {
    return (react_1.default.createElement("div", { style: {
            margin: '0 auto',
            maxWidth: '1200px'
        } }, children));
};
exports.default = Container;
//# sourceMappingURL=Container.js.map