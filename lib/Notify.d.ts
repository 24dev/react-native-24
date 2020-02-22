import { Ref } from "react";
export declare type PositionTypes = "top" | "top-right" | "top-left";
declare function setNotification(ref: Ref<any>): void;
declare function open(message: string, time?: number, position?: PositionTypes, icon?: any, // component
iconProps?: {
    name?: string;
    color?: string;
    size?: number;
}): void;
declare function close(): void;
declare const _default: {
    open: typeof open;
    close: typeof close;
    setNotification: typeof setNotification;
};
export default _default;
//# sourceMappingURL=Notify.d.ts.map