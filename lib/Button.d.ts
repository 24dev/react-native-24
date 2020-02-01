import React from "react";
import { ViewStyle } from "react-native";
declare type FeedbackType = "opacity" | "highlight" | "none";
declare type ThemeOptions = "primary" | "secondary" | "outline" | "invisible" | "round";
declare type ThemeType = ThemeOptions[] | ThemeOptions;
declare const Button: React.FC<{
    feedback?: FeedbackType;
    theme?: ThemeType;
    children: any;
    style?: ViewStyle | ViewStyle[];
    onPress?: () => void;
    onPressIn?: () => void;
    onPressOut?: () => void;
    disabled?: boolean;
    size?: number;
}>;
export default Button;
//# sourceMappingURL=Button.d.ts.map