import React from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  ViewStyle
} from "react-native";

type FeedbackType = "opacity" | "highlight" | "none";
type ThemeOptions = "primary" | "secondary" | "outline" | "invisible" | "round";
type ThemeType = ThemeOptions[] | ThemeOptions;

const themes: any = {
  primary: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#4a90e2",
    borderRadius: 3
  },
  secondary: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
    borderRadius: 3
  },
  outline: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: "rgb(211, 211, 211)",
    borderWidth: 1,
    borderRadius: 3
  },
  invisible: {},
  round: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  disabled: {
    opacity: 0.75
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
  size?: number;
  underlayColor?: string;
}> = props => {
  const {
    feedback = "opacity",
    theme = "invisible",
    children,
    style = {},
    onPress = () => {},
    onPressIn = () => {},
    onPressOut = () => {},
    disabled = false,
    size = 50,
    underlayColor = "#fafafa"
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
  const Round =
    theme === "round" || (Array.isArray(theme) && theme.includes("round"))
      ? {
          height: size,
          width: size,
          borderRadius: size / 2
        }
      : {};
  return (
    <Tag
      style={{
        ...Themes,
        ...(disabled ? themes.disabled : {}),
        ...Round,
        ...Style
      }}
      disabled={disabled}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      {...(feedback === "highlight" ? underlayColor : null)}
    >
      {children}
    </Tag>
  );
};

export default Button;
