import React from "react";
import { StyleSheet, Animated, View, Dimensions, Text } from "react-native";

const styles = StyleSheet.create({
  card: {
    paddingVertical: 14,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 3,
    shadowOpacity: 0.22
  }
});

const maxWidth = Dimensions.get("window").width;

interface State {
  modalShown: boolean;
  color: string;
  message: string;
  icon: any;
  iconProps: {
    name?: string;
    color?: string;
    size?: number;
  };
}

class Notification extends React.Component<{}, State> {
  animatedValue: Animated.Value;

  constructor(props: any) {
    super(props);
    this.animatedValue = new Animated.Value(-100);
    this.state = {
      modalShown: false,
      color: "green",
      message: "Success!",
      icon: null,
      iconProps: {
        name: "check-circle",
        color: "grey",
        size: 25
      }
    };
  }

  public open = (
    message: string,
    time = 2000,
    icon: any = null,
    iconProps: State["iconProps"] = {}
  ) => {
    const { modalShown } = this.state;
    if (modalShown) return;
    this.setState({ modalShown: true, message, icon, iconProps });
    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: 350
    }).start(() => this.close(time));
  };

  public close = (time: number) => {
    this.setState({ modalShown: false });
    setTimeout(() => {
      Animated.timing(this.animatedValue, {
        toValue: -100,
        duration: 350
      }).start();
    }, time);
  };

  render() {
    const { color, message, icon, iconProps } = this.state;
    const Icon = icon;
    return (
      <Animated.View
        style={{
          transform: [{ translateY: this.animatedValue }],
          position: "absolute",
          top: 50,
          alignSelf: "center",
          maxWidth,
          paddingHorizontal: 50,
          zIndex: 10
        }}
      >
        <View style={styles.card}>
          <View style={{ marginRight: 14 }}>
            {Icon && (
              <Icon
                size={iconProps.size}
                name={iconProps.name}
                color={iconProps.color}
              />
            )}
          </View>
          <Text style={{ color }}>{message}</Text>
        </View>
      </Animated.View>
    );
  }
}

export default Notification;
