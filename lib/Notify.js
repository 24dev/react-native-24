"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let notification;
function setNotification(ref) {
    notification = ref;
}
function open(message, time, position, icon, // component
iconProps) {
    notification.open(message, time, position, icon, iconProps);
}
function close() {
    notification.close();
}
exports.default = {
    open,
    close,
    setNotification
};
//# sourceMappingURL=Notify.js.map