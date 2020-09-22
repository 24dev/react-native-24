import React from "react";
import { ImageStyle, ImageURISource } from "react-native";
export interface ImageProps {
    width: number;
    style: ImageStyle | ImageStyle[];
    source: ImageURISource;
    onLoad?: (args: any) => any;
}
export interface ImageState {
    height: number;
}
declare class Wrap extends React.PureComponent<ImageProps, ImageState> {
    state: {
        height: number;
    };
    handleLoad: (tempWidth: number, tempHeight: number) => void;
    render(): JSX.Element;
}
export default Wrap;
//# sourceMappingURL=Image.d.ts.map