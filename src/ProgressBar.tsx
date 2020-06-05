import React from "react";
import { StyleSheet, View, TextStyle, ViewStyle } from "react-native";
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
  },
  indentPercentage: {
    position: "absolute",
    left: "105%",
  },
});

const ProgressBar: React.FC<{
  complete: number;
  maxValue?: number;
  color?: string;
  percentage?: boolean;
  label?: string;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
  barStyle?: ViewStyle;
  width?: number | string;
}> = (props) => {
  const {
    complete,
    maxValue = 100,
    color = "lightgreen",
    percentage = false,
    label = "",
    labelStyle = {},
    containerStyle = {},
    barStyle = {},
    width = "100%",
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
        style={[
          styles.container,
          barStyle,
          percentage ? { height: 14 } : {},
          { width },
        ]}
      >
        <Flex
          justifyContent="flex-end"
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
        </Flex>
      </View>
    </View>
  );
};

export default ProgressBar;
