import React from "react";
import { ViewStyle, TextInput } from "react-native";

const Input: React.FC<{
  height?: number;
  style?: ViewStyle;
  value?: string;
}> = props => {
  const { height = 40, style = {}, value = "" } = props;
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
      value={value}
    />
  );
};

export default Input;
