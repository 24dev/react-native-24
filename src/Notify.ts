import { Ref } from "react";

let notification: any;

export type PositionTypes = "top" | "top-right" | "top-left";

function setNotification(ref: Ref<any>) {
  notification = ref;
}

function open(
  message: string,
  time?: number,
  position?: PositionTypes,
  icon?: any, // component
  iconProps?: {
    name?: string;
    color?: string;
    size?: number;
  }
) {
  notification.open(message, time, position, icon, iconProps);
}

function close() {
  notification.close();
}

export default {
  open,
  close,
  setNotification
};
