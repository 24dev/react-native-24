import React from "react";
import { StyleSheet, View, TextStyle, ViewStyle } from "react-native";
import { Text, Flex, Space } from "./";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    height: 8,
    backgroundColor: "lightgrey",
    zIndex: 2,
    width: "100%",
    borderRadius: 4,
    overflow: "hidden"
  },
  label: {
    fontSize: 14,
    color: "lightgrey"
  },
  innerBar: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    borderRadius: 4
  },
  indentPercentage: {
    position: "absolute",
    left: "105%"
  }
});

const ProgressBar: React.FC<{
  complete: number;
  color?: string;
  percentage?: boolean;
  label?: string;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
}> = props => {
  const {
    complete,
    color = "lightgreen",
    percentage = false,
    label = "",
    labelStyle = {},
    containerStyle = {}
  } = props;

  return (
    <View style={[containerStyle]}>
      {label ? (
        <React.Fragment>
          <Text style={[styles.label, labelStyle]}>{label}</Text>
          <Space size="xxs" />
        </React.Fragment>
      ) : null}
      <View style={[styles.container, percentage ? { height: 14 } : {}]}>
        <Flex
          justifyContent="flex-end"
          style={[
            styles.innerBar,
            {
              width: `${complete > 100 ? 100 : complete}%`,
              backgroundColor: color
            }
          ]}
        >
          {percentage ? (
            <Text
              style={[
                styles.label,
                {
                  color: "white",
                  marginHorizontal: 6
                },
                complete < 25 ? styles.indentPercentage : {}
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
