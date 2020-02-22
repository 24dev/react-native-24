import React from "react";
import { StyleSheet, Animated, View, Dimensions, Text } from "react-native";
import { PositionTypes } from "./Notify";

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
  position?: PositionTypes;
}
class Notification extends React.Component<{ text: any }, State> {
  animatedValue: Animated.Value;

  constructor(props: any) {
    super(props);
    this.animatedValue = new Animated.Value(-150);
    this.state = {
      modalShown: false,
      color: "#272727",
      message: "Success!",
      icon: null,
      iconProps: {
        name: "check-circle",
        color: "#272727",
        size: 25
      }
    };
  }

  public open = (
    message: string,
    time = 2000,
    position: PositionTypes = "top",
    icon: any = null,
    iconProps: State["iconProps"] = {}
  ) => {
    const { modalShown } = this.state;
    if (modalShown) return;
    this.setState({ modalShown: true, message, icon, iconProps, position });
    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: 350
    }).start(() => this.close(time));
  };

  public close = (time: number) => {
    this.setState({ modalShown: false });
    setTimeout(() => {
      Animated.timing(this.animatedValue, {
        toValue: -150,
        duration: 350
      }).start();
    }, time);
  };

  getAlign = (position: PositionTypes) => {
    if (position === "top") {
      return "center";
    }
    if (position === "top-left") {
      return "flex-start";
    }
    if (position === "top-right") {
      return "flex-end";
    }
    return "center";
  };

  render() {
    const { color, message, icon, iconProps, position = "top" } = this.state;
    const Icon = icon;
    const TextComponent = this.props.text;
    return (
      <Animated.View
        style={{
          transform: [{ translateY: this.animatedValue }],
          position: "absolute",
          top: 50,
          alignSelf: this.getAlign(position),
          maxWidth,
          paddingHorizontal: 50,
          zIndex: 10
        }}
      >
        <View style={styles.card}>
          {Icon && (
            <View style={{ marginRight: 14 }}>
              <Icon
                size={iconProps.size}
                name={iconProps.name}
                color={iconProps.color}
              />
            </View>
          )}
          {TextComponent ? (
            <TextComponent style={{ color }}>{message}</TextComponent>
          ) : (
            <Text style={{ color }}>{message}</Text>
          )}
        </View>
      </Animated.View>
    );
  }
}

export default Notification;
