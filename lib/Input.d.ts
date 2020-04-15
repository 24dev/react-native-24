import React, { Ref } from "react";
import { ViewStyle, TextInputProps, TextInputIOSProps, TextInputAndroidProps } from "react-native";
declare const Input: React.FC<TextInputProps & TextInputAndroidProps & TextInputIOSProps & {
    height?: number;
    style?: ViewStyle;
    containerStyle?: ViewStyle;
    value?: string;
    multiline?: boolean;
    editable?: boolean;
    placeholder?: string;
    secure?: boolean;
    forwardRef?: Ref<any>;
    iconRight?: React.ReactNode;
    iconLeft?: React.ReactNode;
}>;
export default Input;
//# sourceMappingURL=Input.d.ts.map