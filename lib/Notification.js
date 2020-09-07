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
        paddingHorizontal: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "white",
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 3,
        shadowOpacity: 0.22,
    },
});
const maxWidth = react_native_1.Dimensions.get("window").width;
class Notification extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.open = (message, time = 2000, position = "top", icon = null, iconProps = {}) => {
            const { modalShown } = this.state;
            if (modalShown)
                return;
            this.setState({ modalShown: true, message, icon, iconProps, position });
            react_native_1.Animated.timing(this.animatedValue, {
                toValue: 0,
                duration: 350,
            }).start(() => this.close(time));
        };
        this.close = (time) => {
            this.setState({ modalShown: false });
            setTimeout(() => {
                react_native_1.Animated.timing(this.animatedValue, {
                    toValue: -150,
                    duration: 350,
                }).start();
            }, time);
        };
        this.getAlign = (position) => {
            if (position === "top") {
                return "center";
            }
            if (position === "top-left") {
                return "flex-start";
            }
            if (position === "top-right") {
                return "flex-end";
            }
            return "center";
        };
        this.animatedValue = new react_native_1.Animated.Value(-150);
        this.state = {
            modalShown: false,
            color: "#272727",
            message: "Success!",
            icon: null,
            iconProps: {
                name: "check-circle",
                color: "#272727",
                size: 25,
            },
        };
    }
    render() {
        const { color, message, icon, iconProps, position = "top" } = this.state;
        const { text: TextComponent, cardStyle, renderCard } = this.props;
        const Icon = icon;
        return (react_1.default.createElement(react_native_1.Animated.View, { style: {
                transform: [{ translateY: this.animatedValue }],
                position: "absolute",
                top: 50,
                alignSelf: this.getAlign(position),
                maxWidth,
                paddingHorizontal: 50,
                zIndex: 10,
            } }, renderCard !== undefined ? (renderCard()) : (react_1.default.createElement(react_native_1.View, { style: [styles.card, cardStyle] },
            Icon && (react_1.default.createElement(react_native_1.View, { style: { marginRight: 14 } },
                react_1.default.createElement(Icon, { size: iconProps.size, name: iconProps.name, color: iconProps.color }))),
            TextComponent ? (react_1.default.createElement(TextComponent, { style: { color } }, message)) : (react_1.default.createElement(react_native_1.Text, { style: { color } }, message))))));
    }
}
exports.default = Notification;
//# sourceMappingURL=Notification.js.map