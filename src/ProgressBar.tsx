import React from "react";
import { StyleSheet, View, TextStyle, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { Text, Flex, Space } from "./";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 8,
    backgroundColor: "lightgrey",
    zIndex: 2,
    borderRadius: 4,
    overflow: "hidden",
  },
  label: {
    fontSize: 14,
    color: "lightgrey",
  },
  innerBar: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  indentPercentage: {
    position: "absolute",
    left: "105%",
  },
});

const ProgressBar: React.FC<{
  complete: number;
  maxValue: number;
  color?: string;
  percentage?: boolean;
  label?: string;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
  width?: number | string;
  gradientColors?: string[];
  gradientStart?: { x: number; y: number };
  gradientEnd?: { x: number; y: number };
  gradientLocations?: number[];
  gradientUseAngle?: boolean;
  gradientAngle?: number;
  gradientAngleCenter?: { x: number; y: number };
}> = (props) => {
  const {
    complete,
    maxValue = 100,
    color = "lightgreen",
    percentage = false,
    label = "",
    labelStyle = {},
    containerStyle = {},
    width = "100%",
    gradientColors = [],
    gradientStart,
    gradientEnd,
    gradientLocations,
    gradientUseAngle,
    gradientAngle,
    gradientAngleCenter,
  } = props;

  return (
    <View style={[containerStyle]}>
      {label ? (
        <React.Fragment>
          <Text style={[styles.label, labelStyle]}>{label}</Text>
          <Space size="xxs" />
        </React.Fragment>
      ) : null}
      <View
        style={[styles.container, percentage ? { height: 14 } : {}, { width }]}
      >
        <LinearGradient
          colors={gradientColors}
          start={gradientStart}
          end={gradientEnd}
          locations={gradientLocations}
          useAngle={gradientUseAngle}
          angle={gradientAngle}
          angleCenter={gradientAngleCenter}
          style={[
            styles.innerBar,
            {
              width: `${complete > maxValue ? maxValue : complete}%`,
              backgroundColor: color,
            },
          ]}
        >
          {percentage ? (
            <Text
              style={[
                styles.label,
                {
                  color: "white",
                  marginHorizontal: 6,
                },
                complete < 25 ? styles.indentPercentage : {},
              ]}
            >
              {`${complete.toFixed(1)}%`}
            </Text>
          ) : null}
        </LinearGradient>
      </View>
    </View>
  );
};

export default ProgressBar;
