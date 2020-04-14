import React, { Ref } from 'react';
import { ViewStyle, TextInputProps, TextInputIOSProps, TextInputAndroidProps } from 'react-native';
declare const Input: React.FC<TextInputProps & TextInputAndroidProps & TextInputIOSProps & {
    height?: number;
    style?: ViewStyle;
    wrapperStyle?: ViewStyle;
    value?: string;
    multiline?: boolean;
    editable?: boolean;
    placeholder?: string;
    secure?: boolean;
    forwardRef?: Ref<any>;
    iconRight?: React.ReactNode;
    iconLeft?: React.ReactNode;
    iconPaddingRight?: number;
    iconPaddingLeft?: number;
}>;
export default Input;
//# sourceMappingURL=Input.d.ts.map