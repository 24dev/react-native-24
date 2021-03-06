import React from "react";
import { TextStyle } from "react-native";
declare type SizeType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
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
declare const Wrap: React.FC<TextProps>;
export default Wrap;
//# sourceMappingURL=Text.d.ts.map