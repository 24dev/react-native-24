import React from "react";
import { Animated } from "react-native";
import { PositionTypes } from "./Notify";
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
declare class Notification extends React.Component<{}, State> {
    animatedValue: Animated.Value;
    constructor(props: any);
    open: (message: string, time?: number, position?: PositionTypes, icon?: any, iconProps?: {
        name?: string | undefined;
        color?: string | undefined;
        size?: number | undefined;
    }) => void;
    close: (time: number) => void;
    getAlign: (position: PositionTypes) => "flex-start" | "flex-end" | "center";
    render(): JSX.Element;
}
export default Notification;
//# sourceMappingURL=Notification.d.ts.map