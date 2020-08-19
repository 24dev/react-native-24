"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
class SkeletonLoader extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.startSkeletonLoading = (toValue) => {
            react_native_1.Animated.timing(this.skeletonLoading, {
                toValue,
                duration: 1000,
            }).start(() => {
                this.startSkeletonLoading(toValue === 1 ? 0.4 : 1);
            });
        };
        this.skeletonLoading = new react_native_1.Animated.Value(0.4);
    }
    componentDidMount() {
        this.startSkeletonLoading(1);
    }
    render() {
        const { children } = this.props;
        return (react_1.default.createElement(react_native_1.Animated.View, { style: { opacity: this.skeletonLoading } }, children));
    }
}
exports.default = SkeletonLoader;
//# sourceMappingURL=SkeletonLoader.js.map