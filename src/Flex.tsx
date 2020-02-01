import React from "react";
import { View, ViewStyle } from "react-native";

const Flex: React.FC<{
  justifyContent?:
    | "space-between"
    | "space-evenly"
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around";
  alignItems?:
    | "space-between"
    | "center"
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  children: any;
  style?: ViewStyle | ViewStyle[];
  vertical?: boolean;
}> = props => {
  const {
    justifyContent = "space-between",
    alignItems = "center",
    children,
    vertical = false,
    style = {}
  } = props;
  const Style = Array.isArray(style)
    ? {
        ...style[0],
        ...style[1]
      }
    : style;
  return (
    <View
      style={
        {
          display: "flex",
          flexDirection: vertical ? "column" : "row",
          alignItems,
          justifyContent,
          ...Style
        } as ViewStyle
      }
    >
      {children}
    </View>
  );
};

export default Flex;
