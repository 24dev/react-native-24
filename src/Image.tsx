import React from "react";
import FastImage from "react-native-fast-image";
import { ImageStyle, ImageURISource } from "react-native";

export interface ImageProps {
  width?: number;
  style: ImageStyle | ImageStyle[];
  source: ImageURISource;
  onLoad?: (args: any) => any;
}

export interface ImageState {
  height: number;
}

class Wrap extends React.PureComponent<ImageProps, ImageState> {
  state = {
    height: 150,
  };

  handleLoad = (tempWidth: number, tempHeight: number) => {
    const { width } = this.props;

    if (width) {
      const ratio = tempHeight / tempWidth;
      const height = width * ratio;
      this.setState({
        height,
      });
    }
  };

  render() {
    const { width, source, onLoad = () => {}, style = {} } = this.props;
    const { height } = this.state;
    return (
      <FastImage
        style={[
          {
            width,
            height,
          },
          style,
        ]}
        source={{
          uri: source.uri,
          priority: FastImage.priority.high,
        }}
        onLoad={(e) => {
          this.handleLoad(e.nativeEvent.width, e.nativeEvent.height);
          onLoad(e);
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    );
  }
}

export default Wrap;
