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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_fast_image_1 = __importDefault(require("react-native-fast-image"));
const Wrap = (_a) => {
    var { style, width, onLoad } = _a, rest = __rest(_a, ["style", "width", "onLoad"]);
    const [height, setHeight] = react_1.useState(150);
    const handleLoad = (tempWidth, tempHeight) => {
        if (width) {
            const ratio = tempHeight / tempWidth;
            const height = width * ratio;
            setHeight(height);
        }
    };
    return (react_1.default.createElement(react_native_fast_image_1.default, Object.assign({ style: [
            {
                width,
                height,
            },
            style,
        ], onLoad: (e) => {
            handleLoad(e.nativeEvent.width, e.nativeEvent.height);
            if (!!onLoad) {
                onLoad(e);
            }
        }, resizeMode: react_native_fast_image_1.default.resizeMode.cover }, rest)));
};
exports.default = Wrap;
//# sourceMappingURL=Image.js.map