"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const _1 = require("./");
const styles = react_native_1.StyleSheet.create({
    container: {
        position: "relative",
        height: 8,
        backgroundColor: "lightgrey",
        zIndex: 2,
        borderRadius: 4,
        overflow: "hidden"
    },
    label: {
        fontSize: 14,
        color: "lightgrey"
    },
    innerBar: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        borderRadius: 4
    },
    indentPercentage: {
        position: "absolute",
        left: "105%"
    }
});
const ProgressBar = props => {
    const { complete, maxValue = 100, color = "lightgreen", percentage = false, label = "", labelStyle = {}, containerStyle = {}, width = "100%" } = props;
    return (react_1.default.createElement(react_native_1.View, { style: [containerStyle] },
        label ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(_1.Text, { style: [styles.label, labelStyle] }, label),
            react_1.default.createElement(_1.Space, { size: "xxs" }))) : null,
        react_1.default.createElement(react_native_1.View, { style: [styles.container, percentage ? { height: 14 } : {}, { width }] },
            react_1.default.createElement(_1.Flex, { justifyContent: "flex-end", style: [
                    styles.innerBar,
                    {
                        width: `${complete > maxValue ? maxValue : complete}%`,
                        backgroundColor: color
                    }
                ] }, percentage ? (react_1.default.createElement(_1.Text, { style: [
                    styles.label,
                    {
                        color: "white",
                        marginHorizontal: 6
                    },
                    complete < 25 ? styles.indentPercentage : {}
                ] }, `${complete.toFixed(1)}%`)) : null))));
};
exports.default = ProgressBar;
//# sourceMappingURL=ProgressBar.js.map