import React, { FC } from "react";
import { StyleSheet } from "react-native";
import RNPickerSelect, { PickerSelectProps } from "react-native-picker-select";

const CustomSelect: FC<PickerSelectProps> = ({
  style = {
    inputIOSContainer: styles.inputContainer,
    inputAndroidContainer: styles.inputContainer,
  },
  ...restProps
}) => <RNPickerSelect style={style} {...restProps} />;

export default CustomSelect;

const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
    width: "100%",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    height: 40,
  },
});
