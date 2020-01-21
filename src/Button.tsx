import React from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  ViewStyle
} from "react-native";

type FeedbackType = "opacity" | "highlight" | "none";
type ThemeType = "primary" | "outline" | "invisible";

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
  style: ViewStyle;
  onPress: () => void;
  disabled?: boolean;
}> = ({
  feedback = "opacity",
  theme = "invisible",
  children,
  style,
  onPress,
  disabled = false
}) => {
  const Tag = getTag(feedback);
  return (
    <Tag
      style={{
        ...themes[theme],
        ...(disabled ? themes.disabled : {}),
        ...style
      }}
      disabled={disabled}
      onPress={onPress}
    >
      {children}
    </Tag>
  );
};

export default Button;
