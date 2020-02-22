"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles = react_native_1.StyleSheet.create({
    card: {
        paddingVertical: 14,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 3,
        shadowOpacity: 0.22
    }
});
const maxWidth = react_native_1.Dimensions.get("window").width;
class Notification extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.open = (message, time = 2000, icon = null, iconProps = {}) => {
            const { modalShown } = this.state;
            if (modalShown)
                return;
            this.setState({ modalShown: true, message, icon, iconProps });
            react_native_1.Animated.timing(this.animatedValue, {
                toValue: 0,
                duration: 350
            }).start(() => this.close(time));
        };
        this.close = (time) => {
            this.setState({ modalShown: false });
            setTimeout(() => {
                react_native_1.Animated.timing(this.animatedValue, {
                    toValue: -100,
                    duration: 350
                }).start();
            }, time);
        };
        this.animatedValue = new react_native_1.Animated.Value(-100);
        this.state = {
            modalShown: false,
            color: "green",
            message: "Success!",
            icon: null,
            iconProps: {
                name: "check-circle",
                color: "grey",
                size: 25
            }
        };
    }
    render() {
        const { color, message, icon, iconProps } = this.state;
        const Icon = icon;
        return (react_1.default.createElement(react_native_1.Animated.View, { style: {
                transform: [{ translateY: this.animatedValue }],
                position: "absolute",
                top: 50,
                alignSelf: "center",
                maxWidth,
                paddingHorizontal: 50
            } },
            react_1.default.createElement(react_native_1.View, { style: styles.card },
                react_1.default.createElement(react_native_1.View, { style: { marginRight: 14 } }, Icon && (react_1.default.createElement(Icon, { size: iconProps.size, name: iconProps.name, color: iconProps.color }))),
                react_1.default.createElement(react_native_1.Text, { style: { color } }, message))));
    }
}
exports.default = Notification;
//# sourceMappingURL=Notification.js.map