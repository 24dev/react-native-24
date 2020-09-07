import { FC } from "react";
import { ViewStyle } from "react-native";
export interface AvatarProps {
    src: string | null;
    size: "base" | "ring" | "xxs" | "xs" | "sm" | "md" | "lg";
    style: ViewStyle;
    skeletonLoading: boolean;
    mainColor: string;
    secondaryColor: string;
}
declare const Avatar: FC<AvatarProps>;
export default Avatar;
//# sourceMappingURL=Avatar.d.ts.map