import React from "react";
import { ViewStyle, TextInput } from "react-native";

const Input: React.FC<{
  height?: number;
  style?: ViewStyle;
  value?: string;
  onChange?: Function;
}> = props => {
  const { height = 40, style = {}, value = "", onChange = () => {} } = props;
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
      onChangeText={value => onChange(value)}
      // value={value}
    />
  );
};

export default Input;
