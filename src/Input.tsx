import React, { Ref } from "react";
import {
  View,
  ViewStyle,
  TextInput,
  TextInputProps,
  TextInputIOSProps,
  TextInputAndroidProps,
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
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

const Input: React.FC<TextInputProps &
  TextInputAndroidProps &
  TextInputIOSProps & {
  height?: number;
  style?: ViewStyle;
  wrapperStyle?: ViewStyle;
  value?: string;
  multiline?: boolean;
  editable?: boolean;
  placeholder?: string;
  secure?: boolean;
  forwardRef?: Ref<any>;
  withIcon?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  iconPaddingRight?: number;
  iconPaddingLeft?: number;
}> = props => {
  const {
    height = 40,
    style = {},
    wrapperStyle = {},
    multiline = false,
    value = "",
    editable = true,
    placeholder = "",
    secure = false,
    forwardRef = () => {},
    withIcon = false,
    icon = <React.Fragment />,
    iconPosition = 'right',
    iconPaddingRight = 5,
    iconPaddingLeft = 5,
  } = props;

  const renderIcon = () => {

    if (iconPosition === 'right') {
      return (
        <View style={{...styles.iconRightWrapper, right: iconPaddingRight }}>
          {icon}
        </View>
      )
    } else {
      return (
        <View style={{...styles.iconLeftWrapper, left: iconPaddingLeft }}>
          {icon}
        </View>
      )
    }
  };

  return (
    <View style={[styles.inputWrapper, wrapperStyle]}>
      <TextInput
        underlineColorAndroid={props.underlineColorAndroid}
        textBreakStrategy={props.textBreakStrategy}
        spellCheck={props.spellCheck}
        selectTextOnFocus={props.selectTextOnFocus}
        selectionState={props.selectionState}
        selectionColor={props.selectionColor}
        scrollEnabled={props.scrollEnabled}
        onResponderReject={props.onResponderReject}
        returnKeyLabel={props.returnKeyLabel}
        returnKeyType={props.returnKeyType}
        placeholderTextColor={props.placeholderTextColor}
        onSelectionChange={props.onSelectionChange}
        onScroll={props.onScroll}
        onLayout={props.onLayout}
        onKeyPress={props.onKeyPress}
        onFocus={props.onFocus}
        onEndEditing={props.onEndEditing}
        onContentSizeChange={props.onContentSizeChange}
        onBlur={props.onBlur}
        numberOfLines={props.numberOfLines}
        maxLength={props.maxLength}
        maxFontSizeMultiplier={props.maxFontSizeMultiplier}
        keyboardAppearance={props.keyboardAppearance}
        keyboardType={props.keyboardType}
        inputAccessoryViewID={props.inputAccessoryViewID}
        inlineImageLeft={props.inlineImageLeft}
        inlineImagePadding={props.inlineImagePadding}
        importantForAccessibility={props.importantForAccessibility}
        enablesReturnKeyAutomatically={props.enablesReturnKeyAutomatically}
        disableFullscreenUI={props.disableFullscreenUI}
        defaultValue={props.defaultValue}
        dataDetectorTypes={props.dataDetectorTypes}
        contextMenuHidden={props.contextMenuHidden}
        clearButtonMode={props.clearButtonMode}
        clearTextOnFocus={props.clearTextOnFocus}
        caretHidden={props.caretHidden}
        blurOnSubmit={props.blurOnSubmit}
        autoCapitalize={props.autoCapitalize}
        autoFocus={props.autoFocus}
        autoCompleteType={props.autoCompleteType}
        autoCorrect={props.autoCorrect}
        allowFontScaling={props.allowFontScaling}
        style={[
          {
            width: "100%",
            height,
            borderWidth: 1,
            borderColor: "lightgrey",
            borderRadius: 6
          },
          style
        ]}
        secureTextEntry={secure}
        multiline={multiline}
        onChangeText={props.onChangeText}
        value={value || undefined}
        editable={editable}
        placeholder={placeholder}
        ref={forwardRef}
      />
      {withIcon ? renderIcon() : null }
    </View>
  );
};

export default Input;
