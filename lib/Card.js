"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Card = props => {
    const { children = null, style = {}, noPadding = false } = props;
    return (react_1.default.createElement(react_native_1.View, { style: [
            Object.assign({ padding: noPadding ? 0 : 5, backgroundColor: "white", borderRadius: 10 }, (react_native_1.Platform.OS === "android"
                ? {
                    elevation: 3
                }
                : {
                    shadowColor: "#272727",
                    shadowOffset: {
                        width: 0,
                        height: 1
                    },
                    shadowRadius: 3,
                    shadowOpacity: 0.22
                })),
            style
        ] }, children));
};
exports.default = Card;
//# sourceMappingURL=Card.js.map