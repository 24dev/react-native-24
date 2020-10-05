import React, { FC, useState } from "react";
import FastImage, { FastImageProps } from "react-native-fast-image";
import { ImageStyle } from "react-native";

export interface ImageProps extends FastImageProps {
  width?: number;
  style?: ImageStyle | ImageStyle[];
  onLoad?: (args: any) => any;
}

export interface ImageState {
  height: number;
}

const Wrap: FC<ImageProps> = ({ style, width, onLoad, ...rest }) => {
  const [height, setHeight] = useState(150);

  const handleLoad = (tempWidth: number, tempHeight: number) => {
    if (width) {
      const ratio = tempHeight / tempWidth;
      const height = width * ratio;

      setHeight(height);
    }
  };

  return (
    <FastImage
      style={[
        {
          width,
          height,
        },
        style,
      ]}
      onLoad={(e: any) => {
        handleLoad(e.nativeEvent.width, e.nativeEvent.height);

        if (!!onLoad) {
          onLoad(e);
        }
      }}
      resizeMode={FastImage.resizeMode.cover}
      {...rest}
    />
  );
};

export default Wrap;
