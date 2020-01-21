import React from "react";
import {TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight} from 'react-native';

type FeedbackType = 'opacity' | 'highlight' | 'none'

const themes: any = {
  primary: {
    border: 0,
    outline: "none",
    padding: "10px 30px",
    background: "#4a90e2",
    borderRadius: "3px",
    cursor: "pointer",
    "&:hover": {
      background: "rgb(42, 101, 171)"
    }
  },
  outline: {
    outline: "none",
    background: "transparent",
    padding: "10px 30px",
    border: "1px solid rgb(211, 211, 211)",
    borderRadius: "3px",
    cursor: "pointer"
  },
  invisible: {
    border: 0,
    outline: "none",
    background: "transparent",
    cursor: "pointer"
  },
  disabled: {
    opacity: 0.75,
    cursor: "not-allowed"
  }
};

const getTag = (feedback: FeedbackType) => {
  switch (feedback) {
    case 'opacity':
      return TouchableOpacity;
      case 'highlight':
          return TouchableHighlight;
          case 'none':
              return TouchableWithoutFeedback;
  }
}

const Button: React.FC<{
  feedback?: FeedbackType,
  theme?: string;
  children: any;
  style: any;
  onClick: any;
  disabled?: boolean;
  className?: string;
  form?: string;
  type?: "button" | "submit" | "reset" | undefined;
}> = ({
  feedback = 'opacity',
  theme = "invisible",
  type = "button",
  children,
  style,
  onClick,
  disabled = false,
  className = "",
  form = ""
}) => {

  const Tag = getTag(feedback);
  return (
    <Tag
      style={{
        ...themes[theme],
        ...(disabled ? themes.disabled : {}),
        ...style
      }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
      form={form}
    >
      {children}
    </Tag>
  );
};

export default Button;
