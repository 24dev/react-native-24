import React from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  ViewStyle
} from "react-native";

type FeedbackType = "opacity" | "highlight" | "none";
type ThemeOptions = "primary" | "outline" | "invisible" | "round";
type ThemeType = ThemeOptions[] | ThemeOptions;

const themes: any = {
  primary: {
    border: 0,
    outline: "none",
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#4a90e2",
    borderRadius: 3
  },
  outline: {
    outline: "none",
    background: "transparent",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: "rgb(211, 211, 211)",
    borderWidth: 1,
    borderRadius: 3
  },
  invisible: {
    border: 0,
    outline: "none",
    background: "transparent"
  },
  round: {
    width: 50,
    height: 50,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  disabled: {
    opacity: 0.75,
    cursor: "not-allowed"
  }
};

const getTag = (feedback: FeedbackType) => {
  switch (feedback) {
    case "opacity":
      return TouchableOpacity;
    case "highlight":
      return TouchableHighlight;
    case "none":
      return TouchableWithoutFeedback;
  }
};

const Button: React.FC<{
  feedback?: FeedbackType;
  theme?: ThemeType;
  children: any;
  style?: ViewStyle | ViewStyle[];
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  disabled?: boolean;
}> = props => {
  const {
    feedback = "opacity",
    theme = "invisible",
    children,
    style = {},
    onPress = () => {},
    onPressIn = () => {},
    onPressOut = () => {},
    disabled = false
  } = props;

  const Tag = getTag(feedback);
  const Themes =
    typeof theme === "string"
      ? themes[theme]
      : {
          ...themes[theme[0]],
          ...themes[theme[1]]
        };
  const Style = Array.isArray(style)
    ? {
        ...style[0],
        ...style[1]
      }
    : style;
  return (
    <Tag
      style={{
        ...Themes,
        ...(disabled ? themes.disabled : {}),
        ...Style
      }}
      disabled={disabled}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      {children}
    </Tag>
  );
};

export default Button;
