"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles = react_native_1.StyleSheet.create({
    inputWrapper: {
        position: 'relative',
        width: '100%',
    },
    iconRightWrapper: {
        position: 'absolute',
        right: 0,
        top: 0,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    iconLeftWrapper: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
});
const Input = props => {
    const { height = 40, style = {}, wrapperStyle = {}, multiline = false, value = '', editable = true, placeholder = '', secure = false, forwardRef = () => { }, iconRight = react_1.default.createElement(react_1.default.Fragment, null), iconLeft = react_1.default.createElement(react_1.default.Fragment, null), iconPaddingRight = 5, iconPaddingLeft = 5, } = props;
    return (react_1.default.createElement(react_native_1.View, { style: [styles.inputWrapper, wrapperStyle] },
        react_1.default.createElement(react_native_1.TextInput, { underlineColorAndroid: props.underlineColorAndroid, textBreakStrategy: props.textBreakStrategy, spellCheck: props.spellCheck, selectTextOnFocus: props.selectTextOnFocus, selectionState: props.selectionState, selectionColor: props.selectionColor, scrollEnabled: props.scrollEnabled, onResponderReject: props.onResponderReject, returnKeyLabel: props.returnKeyLabel, returnKeyType: props.returnKeyType, placeholderTextColor: props.placeholderTextColor, onSelectionChange: props.onSelectionChange, onScroll: props.onScroll, onLayout: props.onLayout, onKeyPress: props.onKeyPress, onFocus: props.onFocus, onEndEditing: props.onEndEditing, onContentSizeChange: props.onContentSizeChange, onBlur: props.onBlur, numberOfLines: props.numberOfLines, maxLength: props.maxLength, maxFontSizeMultiplier: props.maxFontSizeMultiplier, keyboardAppearance: props.keyboardAppearance, keyboardType: props.keyboardType, inputAccessoryViewID: props.inputAccessoryViewID, inlineImageLeft: props.inlineImageLeft, inlineImagePadding: props.inlineImagePadding, importantForAccessibility: props.importantForAccessibility, enablesReturnKeyAutomatically: props.enablesReturnKeyAutomatically, disableFullscreenUI: props.disableFullscreenUI, defaultValue: props.defaultValue, dataDetectorTypes: props.dataDetectorTypes, contextMenuHidden: props.contextMenuHidden, clearButtonMode: props.clearButtonMode, clearTextOnFocus: props.clearTextOnFocus, caretHidden: props.caretHidden, blurOnSubmit: props.blurOnSubmit, autoCapitalize: props.autoCapitalize, autoFocus: props.autoFocus, autoCompleteType: props.autoCompleteType, autoCorrect: props.autoCorrect, allowFontScaling: props.allowFontScaling, style: [
                {
                    width: '100%',
                    height,
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    borderRadius: 6,
                },
                style,
            ], secureTextEntry: secure, multiline: multiline, onChangeText: props.onChangeText, value: value || undefined, editable: editable, placeholder: placeholder, ref: forwardRef }),
        iconLeft ? (react_1.default.createElement(react_native_1.View, { style: Object.assign(Object.assign({}, styles.iconLeftWrapper), { left: iconPaddingLeft }) }, iconLeft)) : null,
        iconRight ? (react_1.default.createElement(react_native_1.View, { style: Object.assign(Object.assign({}, styles.iconRightWrapper), { right: iconPaddingRight }) }, iconRight)) : null));
};
exports.default = Input;
//# sourceMappingURL=Input.js.map