import { FC } from "react";
import { FastImageProps } from "react-native-fast-image";
import { ImageStyle } from "react-native";
export interface ImageProps extends FastImageProps {
    width?: number;
    style?: ImageStyle | ImageStyle[];
    onLoad?: (args: any) => any;
}
export interface ImageState {
    height: number;
}
declare const Wrap: FC<ImageProps>;
export default Wrap;
//# sourceMappingURL=Image.d.ts.map