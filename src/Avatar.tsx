import React from "react";
import { View, ViewStyle, StyleSheet, ImageBackground } from "react-native";

const styles = StyleSheet.create({
  xxs: {
    height: 24,
    width: 24,
    borderRadius: 12
  },
  xs: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  sm: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  md: {
    height: 70,
    width: 70,
    borderRadius: 35
  },
  lg: {
    height: 100,
    width: 100,
    borderRadius: 50
  }
});

const Avatar: React.FC<{
  source: any;
  style?: ViewStyle;
  size?: "xxs" | "xs" | "sm" | "md" | "lg";
}> = props => {
  const { source, size = "sm", style = {} } = props;
  return (
    <View style={[styles[size], style]}>
      <ImageBackground
        source={source}
        style={styles[size]}
        resizeMode="cover"
      />
    </View>
  );
};

export default Avatar;
