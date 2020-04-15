import React, { Ref } from "react";
import {
  View,
  ViewStyle,
  TextInput,
  TextInputProps,
  TextInputIOSProps,
  TextInputAndroidProps,
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

const Input: React.FC<TextInputProps &
  TextInputAndroidProps &
  TextInputIOSProps & {
    height?: number;
    style?: ViewStyle;
    containerStyle?: ViewStyle;
    value?: string;
    multiline?: boolean;
    editable?: boolean;
    placeholder?: string;
    secure?: boolean;
    forwardRef?: Ref<any>;
    iconRight?: React.ReactNode;
    iconLeft?: React.ReactNode;
  }> = props => {
  const {
    height = 40,
    style = {},
    containerStyle = {},
    multiline = false,
    value = "",
    editable = true,
    placeholder = "",
    secure = false,
    forwardRef = () => {},
    iconRight = null,
    iconLeft = null
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      {iconLeft ? <View style={{ flex: 0.2 }}>{iconLeft}</View> : null}
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
        style={[{ height, flex: 1 }, style]}
        secureTextEntry={secure}
        multiline={multiline}
        onChangeText={props.onChangeText}
        value={value || undefined}
        editable={editable}
        placeholder={placeholder}
        ref={forwardRef}
      />
      {iconRight ? <View style={{ flex: 0.2 }}>{iconRight}</View> : null}
    </View>
  );
};

export default Input;
