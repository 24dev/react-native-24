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
    forwardRef?: Ref<any>;
    iconRight?: React.ReactNode;
    iconLeft?: React.ReactNode;
  }> = props => {
  const {
    style = {},
    height = 40,
    multiline = false,
    value = "",
    editable = true,
    placeholder = "",
    secure = false,
    forwardRef = () => {},
    iconRight = null,
    iconLeft = null
  } = props;

  const maxHeight = multiline ? 180 : height;
  const minHeight = height;

  return (
    <View style={[styles.container, style]}>
      {iconLeft ? <View style={styles.iconLeft}>{iconLeft}</View> : null}
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
        style={{ flex: 1, minHeight, maxHeight }}
        secureTextEntry={secure}
        multiline={multiline}
        onChangeText={props.onChangeText}
        value={value || undefined}
        editable={editable}
        placeholder={placeholder}
        ref={forwardRef}
      />
      {iconRight ? <View style={styles.iconRight}>{iconRight}</View> : null}
    </View>
  );
};

export default Input;
