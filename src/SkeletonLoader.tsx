import React from "react";
import { Animated } from "react-native";

class SkeletonLoader extends React.Component<{}> {
  skeletonLoading: Animated.Value;

  constructor(props: {}) {
    super(props);
    this.skeletonLoading = new Animated.Value(0.4);
  }

  componentDidMount() {
    this.startSkeletonLoading(1);
  }

  startSkeletonLoading = (toValue: number) => {
    Animated.timing(this.skeletonLoading, {
      toValue,
      duration: 1000,
    }).start(() => {
      this.startSkeletonLoading(toValue === 1 ? 0.4 : 1);
    });
  };

  render() {
    const { children } = this.props;
    return (
      <Animated.View style={{ opacity: this.skeletonLoading }}>
        {children}
      </Animated.View>
    );
  }
}

export default SkeletonLoader;
