import React, { FC } from "react";
import FastImage from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet, View, ViewStyle } from "react-native";

import SkeletonLoader from "./SkeletonLoader";

const styles = StyleSheet.create({
  base: {
    backgroundColor: "#fff",
  },
  ring: {
    backgroundColor: "#fff",
  },
  xxs: {
    height: 24,
    width: 24,
    borderRadius: 12,
  },
  xs: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  sm: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  md: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  lg: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});

export interface AvatarProps {
  src: string | null;
  size: "base" | "ring" | "xxs" | "xs" | "sm" | "md" | "lg";
  style: ViewStyle;
  skeletonLoading: boolean;
  mainColor: string;
  secondaryColor: string;
}

const Avatar: FC<AvatarProps> = ({
  src,
  size,
  style,
  skeletonLoading,
  mainColor,
  secondaryColor,
}) =>
  skeletonLoading ? (
    <SkeletonLoader>
      <View style={[styles.base, styles[size], style]}>
        <View
          style={[
            {
              transform: [{ scale: 0.9 }],
              backgroundColor: "#e3e3e3",
            },
            styles[size],
          ]}
        >
          <View
            style={[
              styles.ring,
              { transform: [{ scale: 0.93 }] },
              styles[size],
            ]}
          >
            <View
              style={[
                styles.base,
                {
                  transform: [{ scale: 0.93 }],
                  backgroundColor: "#e3e3e3",
                },
                styles[size],
              ]}
            />
          </View>
        </View>
      </View>
    </SkeletonLoader>
  ) : (
    <View style={[styles.base, styles[size], style]}>
      {size === "lg" ? (
        <LinearGradient
          start={{ x: 0.2, y: 0.2 }}
          colors={[mainColor, secondaryColor]}
          style={[{ transform: [{ scale: 0.9 }] }, styles[size]]}
        >
          <View
            style={[
              styles.ring,
              { transform: [{ scale: 0.93 }] },
              styles[size],
            ]}
          >
            {src ? (
              <FastImage
                source={{
                  uri: src,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
                style={[
                  styles.base,
                  { transform: [{ scale: 0.93 }] },
                  styles[size],
                ]}
              />
            ) : null}
          </View>
        </LinearGradient>
      ) : (
        <View
          style={[
            {
              transform: [{ scale: 0.92 }],
              backgroundColor: mainColor,
            },
            styles[size],
          ]}
        >
          {src ? (
            <FastImage
              source={{
                uri: src,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
              style={[
                styles.base,
                { transform: [{ scale: 0.86 }] },
                styles[size],
              ]}
            />
          ) : null}
        </View>
      )}
    </View>
  );

Avatar.defaultProps = {
  size: "sm",
  src: null,
  style: {},
  skeletonLoading: false,
};

export default Avatar;
