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
  style?: ViewStyle;
  vertical?: boolean;
}> = props => {
  const {
    justifyContent = "space-between",
    alignItems = "center",
    children,
    vertical = false,
    style = {}
  } = props;
  return (
    <View
      style={
        {
          display: "flex",
          flexDirection: vertical ? "column" : "row",
          alignItems,
          justifyContent,
          ...style
        } as ViewStyle
      }
    >
      {children}
    </View>
  );
};

export default Flex;
