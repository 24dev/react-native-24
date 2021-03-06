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
    fontWeight: "700"
  },
  h2: {
    fontSize: 24,
    fontWeight: "700"
  },
  h3: {
    fontSize: 20,
    fontWeight: "500"
  },
  h4: {
    fontSize: 18,
    fontWeight: "400"
  },
  h5: {
    fontSize: 16,
    fontWeight: "400"
  },
  h6: {
    fontSize: 14,
    fontWeight: "400"
  },
  p: {
    fontSize: 14,
    fontWeight: "300"
  }
};

export interface TextProps {
  size?: SizeType;
  color?: string;
  bold?: boolean;
  skeletonLoading?: boolean;
  camel?: boolean;
  underlined?: boolean;
  numberOfLines?: number;
  children: any;
  style?: TextStyle | TextStyle[];
}

const Wrap: React.FC<TextProps> = props => {
  const {
    size = "p",
    children,
    style = {},
    camel = false,
    underlined = false,
    numberOfLines = 0,
    bold = false,
    skeletonLoading = false,
    color = "#000"
  } = props;
  let text = children;
  let fontWeight = {};
  const Style = Array.isArray(style)
    ? {
        ...style[0],
        ...style[1]
      }
    : style;
  if (camel) {
    text = text.slice(0, 1).toUpperCase() + text.slice(1, text.length);
  }
  if (bold) {
    fontWeight = {
      fontWeight: "600"
    };
  }
  if (skeletonLoading) {
    return (
      <Text
        {...props}
        style={[
          sizes[size],
          { color },
          Style,
          underlined ? styles.underlined : {},
          fontWeight
        ]}
      >
        ...
      </Text>
    );
  }
  return (
    <Text
      {...props}
      numberOfLines={numberOfLines}
      style={[
        sizes[size],
        { color },
        Style,
        underlined ? styles.underlined : {},
        fontWeight
      ]}
    >
      {text}
    </Text>
  );
};

export default Wrap;
