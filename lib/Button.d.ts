import React from "react";
import { ViewStyle } from "react-native";
declare type FeedbackType = "opacity" | "highlight" | "none";
declare type ThemeType = "primary" | "outline" | "invisible";
declare const Button: React.FC<{
    feedback?: FeedbackType;
    theme?: ThemeType;
    children: any;
    style?: ViewStyle;
    onPress: () => void;
    disabled?: boolean;
}>;
export default Button;
//# sourceMappingURL=Button.d.ts.map