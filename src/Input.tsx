import React from "react";
import {
  ViewStyle,
  TextInput,
  TextInputProps,
  TextInputIOSProps,
  TextInputAndroidProps
} from "react-native";

const Input: React.FC<TextInputProps &
  TextInputAndroidProps &
  TextInputIOSProps & {
    height?: number;
    style?: ViewStyle;
    value?: string;
    multiline?: boolean;
    editable?: boolean;
    placeholder?: string;
    secure?: boolean;
  }> = props => {
  const {
    height = 40,
    style = {},
    multiline = false,
    value = "",
    editable = true,
    placeholder = "",
    secure = false
  } = props;
  return (
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
      {...(value ? value : null)}
      editable={editable}
      placeholder={placeholder}
    />
  );
};

export default Input;
