import React from "react";
import { View, ViewStyle } from "react-native";

const Divider: React.FC<{
  color?: string;
  width?: string | number;
  style?: ViewStyle;
}> = props => {
  const { color = "lightgrey", width = "100%", style = {} } = props;
  return (
    <View
      style={[
        {
          width,
          height: 1,
          backgroundColor: color
        },
        style
      ]}
    />
  );
};

export default Divider;
