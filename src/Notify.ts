import { Ref } from "react";

let notification: any;

function setNotification(ref: Ref<any>) {
  notification = ref;
}

function open(
  message: string,
  time: number,
  icon?: any, // component
  iconProps?: {
    name?: string;
    color?: string;
    size?: number;
  }
) {
  notification.open(message, time, icon, iconProps);
}

function close() {
  notification.close();
}

export default {
  open,
  close,
  setNotification
};
