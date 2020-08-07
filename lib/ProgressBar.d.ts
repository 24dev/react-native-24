import React from "react";
import { TextStyle, ViewStyle } from "react-native";
declare const ProgressBar: React.FC<{
    complete: number;
    maxValue?: number;
    color?: string;
    percentage?: boolean;
    label?: string;
    labelStyle?: TextStyle;
    containerStyle?: ViewStyle;
    barStyle?: ViewStyle;
    width?: number | string;
    gradientColors?: string[];
    gradientStart?: {
        x: number;
        y: number;
    };
    gradientEnd?: {
        x: number;
        y: number;
    };
    gradientLocations?: number[];
    gradientUseAngle?: boolean;
    gradientAngle?: number;
    gradientAngleCenter?: {
        x: number;
        y: number;
    };
}>;
export default ProgressBar;
//# sourceMappingURL=ProgressBar.d.ts.map