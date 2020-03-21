import React, { Ref } from "react";
import { ViewStyle, TextInputProps, TextInputIOSProps, TextInputAndroidProps } from "react-native";
declare const Input: React.FC<TextInputProps & TextInputAndroidProps & TextInputIOSProps & {
    height?: number;
    style?: ViewStyle;
    value?: string;
    multiline?: boolean;
    editable?: boolean;
    placeholder?: string;
    secure?: boolean;
    forwardRef?: Ref<any>;
}>;
export default Input;
//# sourceMappingURL=Input.d.ts.map