import React from "react";
import { ViewStyle, ActivityIndicator } from "react-native";

const Spinner: React.FC<{
  color?: string;
  size?: number;
  style?: ViewStyle;
}> = props => {
  const { color = "#000", size = 20, style = {} } = props;
  return (
    <ActivityIndicator {...props} color={color} size={size} style={style} />
  );
};

export default Spinner;
