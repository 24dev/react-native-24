import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

const styles = StyleSheet.create({
  underlined: {
    textDecorationLine: "underline"
  }
});

type SizeType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
const sizes = {
  h1: {
    fontSize: 30,
    fontWeight: 700
  },
  h2: {
    fontSize: 24,
    fontWeight: 700
  },
  h3: {
    fontSize: 20,
    fontWeight: 500
  },
  h4: {
    fontSize: 18,
    fontWeight: 400
  },
  h5: {
    fontSize: 16,
    fontWeight: 400
  },
  h6: {
    fontSize: 14,
    fontWeight: 400
  },
  p: {
    fontSize: 14,
    fontWeight: 300
  }
};

const Wrap: React.FC<{
  size?: SizeType;
  color?: string;
  bold?: boolean;
  skeletonLoading?: boolean;
  camel?: boolean;
  underlined?: boolean;
  numberOfLines?: number;
  children: any;
  style?: TextStyle;
}> = ({
  size = "p",
  children,
  style = {},
  camel = false,
  underlined = false,
  numberOfLines = 0,
  bold = false,
  skeletonLoading = false,
  color = "#000"
}) => {
  let text = children;
  const props: any = {};
  let fontWeight = {};
  if (camel) {
    text = text.slice(0, 1).toUpperCase() + text.slice(1, text.length);
  }
  if (numberOfLines) {
    props.numberOfLines = numberOfLines;
  }
  if (bold) {
    fontWeight = {
      fontWeight: "600"
    };
  }
  if (skeletonLoading) {
    return (
      <Text
        style={[
          sizes[size],
          { color },
          style,
          underlined ? styles.underlined : {},
          fontWeight
        ]}
        {...props}
      >
        ...
      </Text>
    );
  }
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        sizes[size],
        { color },
        style,
        underlined ? styles.underlined : {},
        fontWeight
      ]}
      {...props}
    >
      {text}
    </Text>
  );
};

export default Wrap;
