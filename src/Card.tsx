import React from "react";
import { View, ViewStyle, Platform } from "react-native";

const Card: React.FC<{
  children?: any;
  style?: ViewStyle;
  noPadding?: boolean;
}> = props => {
  const { children = null, style = {}, noPadding = false } = props;
  return (
    <View
      style={[
        {
          padding: noPadding ? 0 : 5,
          backgroundColor: "white",
          borderRadius: 10,
          ...(Platform.OS === "android"
            ? {
                elevation: 3
              }
            : {
                shadowColor: "#272727",
                shadowOffset: {
                  width: 0,
                  height: 1
                },
                shadowRadius: 3,
                shadowOpacity: 0.22
              })
        },
        style
      ]}
    >
      {children}
    </View>
  );
};

export default Card;
