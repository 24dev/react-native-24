"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_fast_image_1 = __importDefault(require("react-native-fast-image"));
class Wrap extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            height: 150,
        };
        this.handleLoad = (tempWidth, tempHeight) => {
            const { width } = this.props;
            if (width) {
                const ratio = tempHeight / tempWidth;
                const height = width * ratio;
                this.setState({
                    height,
                });
            }
        };
    }
    render() {
        const { width, source, onLoad = () => { }, style = {} } = this.props;
        const { height } = this.state;
        return (react_1.default.createElement(react_native_fast_image_1.default, { style: [
                {
                    width,
                    height,
                },
                style,
            ], source: {
                uri: source.uri,
                priority: react_native_fast_image_1.default.priority.high,
            }, onLoad: (e) => {
                this.handleLoad(e.nativeEvent.width, e.nativeEvent.height);
                onLoad(e);
            }, resizeMode: react_native_fast_image_1.default.resizeMode.cover }));
    }
}
exports.default = Wrap;
//# sourceMappingURL=Image.js.map