import React from "react";
import { View, ViewStyle } from "react-native";

const sizes: any = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 24,
  xxl: 48
};

const Space: React.FC<{
  size?: string;
  children?: any;
  style?: ViewStyle;
}> = props => {
  const { size = "md", children, style } = props;
  return (
    <View
      style={[
        {
          height: 1,
          width: 1,
          margin: sizes[size]
        },
        style
      ]}
    >
      {children}
    </View>
  );
};

export default Space;
