import React from "react";
import { ViewStyle, TextInput } from "react-native";

const Input: React.FC<{
  height?: number;
  style?: ViewStyle;
  value?: string;
  onChange?: Function;
  multiline?: boolean;
  editable?: boolean;
  placeholder?: string;
}> = props => {
  const {
    height = 40,
    style = {},
    multiline = false,
    value = "",
    onChange = () => {},
    editable = true,
    placeholder = ""
  } = props;
  return (
    <TextInput
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
      multiline={multiline}
      onChangeText={value => onChange(value)}
      {...(value ? value : null)}
      editable={editable}
      placeholder={placeholder}
    />
  );
};

export default Input;
