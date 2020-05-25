"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles = react_native_1.StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 8
    },
    iconLeft: {
        marginRight: 5
    },
    iconRight: {
        marginLeft: 5
    }
});
const Input = props => {
    const { style = {}, height = 40, multiline = false, value = "", editable = true, placeholder = "", secure = false, forwardRef = () => { }, iconRight = null, iconLeft = null } = props;
    const maxHeight = multiline ? 180 : height;
    const minHeight = height;
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, style] },
        iconLeft ? react_1.default.createElement(react_native_1.View, { style: styles.iconLeft }, iconLeft) : null,
        react_1.default.createElement(react_native_1.TextInput, { underlineColorAndroid: props.underlineColorAndroid, textBreakStrategy: props.textBreakStrategy, spellCheck: props.spellCheck, selectTextOnFocus: props.selectTextOnFocus, selectionState: props.selectionState, selectionColor: props.selectionColor, scrollEnabled: props.scrollEnabled, onResponderReject: props.onResponderReject, returnKeyLabel: props.returnKeyLabel, returnKeyType: props.returnKeyType, placeholderTextColor: props.placeholderTextColor, onSelectionChange: props.onSelectionChange, onScroll: props.onScroll, onLayout: props.onLayout, onKeyPress: props.onKeyPress, onFocus: props.onFocus, onEndEditing: props.onEndEditing, onContentSizeChange: props.onContentSizeChange, onBlur: props.onBlur, numberOfLines: props.numberOfLines, maxLength: props.maxLength, maxFontSizeMultiplier: props.maxFontSizeMultiplier, keyboardAppearance: props.keyboardAppearance, keyboardType: props.keyboardType, inputAccessoryViewID: props.inputAccessoryViewID, inlineImageLeft: props.inlineImageLeft, inlineImagePadding: props.inlineImagePadding, importantForAccessibility: props.importantForAccessibility, enablesReturnKeyAutomatically: props.enablesReturnKeyAutomatically, disableFullscreenUI: props.disableFullscreenUI, defaultValue: props.defaultValue, dataDetectorTypes: props.dataDetectorTypes, contextMenuHidden: props.contextMenuHidden, clearButtonMode: props.clearButtonMode, clearTextOnFocus: props.clearTextOnFocus, caretHidden: props.caretHidden, blurOnSubmit: props.blurOnSubmit, autoCapitalize: props.autoCapitalize, autoFocus: props.autoFocus, autoCompleteType: props.autoCompleteType, autoCorrect: props.autoCorrect, allowFontScaling: props.allowFontScaling, style: { flex: 1, minHeight, maxHeight }, secureTextEntry: secure, multiline: multiline, onChangeText: props.onChangeText, value: value || undefined, editable: editable, placeholder: placeholder, pointerEvents: props.pointerEvents, ref: forwardRef }),
        iconRight ? react_1.default.createElement(react_native_1.View, { style: styles.iconRight }, iconRight) : null));
};
exports.default = Input;
//# sourceMappingURL=Input.js.map