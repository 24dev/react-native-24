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
  children: any;
  style?: ViewStyle;
}> = props => {
  const { justifyContent = "space-between", children, style = {} } = props;
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent,
        ...style
      }}
    >
      {children}
    </View>
  );
};

export default Flex;
